import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private modalService: NgbModal,
              private authService: AuthService) { }

  private users: User[];
  private user
  private action;

  private userName: String;
  private passWord: String;

  myform: FormGroup;
  username: FormControl;
  password: FormControl;

  ngOnInit() {
    this.getUsers();
    this.createFormControls();
    this.createForm();
  }

  // ngAfterViewInit(){
  //   this.getUsers();
  // }

  createFormControls(){
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
  }

  createForm(){
    this.myform = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  clickLogin(deletedModal){
    var user = new User();
    user.username = this.userName;
    user.password = this.passWord;
    this.authService.logInUser(user).subscribe(data=> {
      localStorage.setItem('token', data.token);
      this.user = data;

      this.userService.getUsers().subscribe(
        data => {
          this.users = data;
          var logged = false;
          var index;
          for(var i=0; i<this.users.length; i++){
            if(this.userName == this.users[i].username && this.passWord == this.users[i].password){
              logged = true;
              index = i;
            }
          }
          if(logged && this.users[index].role == "admin"){
            localStorage.setItem("userId", this.users[index]._id);
            this.userService.currentUser = localStorage.getItem('userId');
            this.deletedModal(deletedModal, "admin");
          }
          else if(logged && this.users[index].role == "user"){
            localStorage.setItem("userId", this.users[index]._id);
            this.userService.currentUser = localStorage.getItem('userId');
            this.deletedModal(deletedModal, "user");
          }
          else{
            this.deletedModal(deletedModal, "invalid");
          }
        },

        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status == 401){
              this.deletedModal(deletedModal, "invalid");
            }
          }
        }
      );
    },
    err => {
      if(err instanceof HttpErrorResponse){
        if(err.status == 401){
          this.deletedModal(deletedModal, "invalid");
        }
      }
    });
  }
 
  deletedModal(deletedModal, action){
    this.modalService.open(deletedModal, { centered: true });
    this.action = action;
  }

  clickOk(route){
    this.router.navigate(['/' + route]);
  }
}
