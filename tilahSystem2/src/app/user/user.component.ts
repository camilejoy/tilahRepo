import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { HistoryService } from '../history.service';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  elements: any = [];
  previous: any = [];
  headElements = ['Name', 'Username', ''];

  private users: User[];
  private user;
  private list: User[];

  private name:String;
  private username:String;
  private addRole: String;
  private passWord:String;
  private confirmPassWord;

  private editName;
  private editUserName;
  private editRole;
  private editPassword;
  private editConfirmPassword;

  private action;
  public index;

  myform: FormGroup;
  fullName: FormControl;
  userName: FormControl;
  userRole: FormControl;
  userPassword: FormControl;
  confirmPassword: FormControl;

  constructor(private userService: UserService, 
              private modalService: NgbModal,
              private router: Router,
              private cdRef: ChangeDetectorRef,
              private logService: HistoryService,
              private authService: AuthService) { }

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;           
 
  ngOnInit() {
    this.getUsers();
    this.createFormControls();
    this.createForm();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        this.list = data;

        this.mdbTable.setDataSource(this.list);
        this.list = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();

        this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
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

  createFormControls() {
    this.fullName = new FormControl('', [Validators.required, Validators.pattern("[^!@#$~%^*()?/{}|\]*")]);
    this.userName = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9\s.@#!&*-_/]*")]);
    this.userRole = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]*")]);
    this.userPassword = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9.@#!&*-_/]*"), Validators.minLength(6)]);
    this.confirmPassword = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9.@#!&*-_/]*"), Validators.minLength(6)]);
  }

  createForm() {
    this.myform = new FormGroup({
      fullName: this.fullName,
      userName: this.userName,
      userRole: this.userRole,
      userPassword: this.userPassword,
      confirmPassword: this.confirmPassword
    });
  }

  addUser(deletedModal){
    var i;
    var ctr=true;
    for( i=0; i<this.users.length; i++){
      if(this.users[i].username == this.username ){
        ctr = false;
      }
    }
    if(ctr){
      var user = new User();
      user.name = this.name;
      user.username = this.username;
      user.role = this.addRole;
      user.password = this.passWord;

      this.userService.addUser(user).subscribe((data) => {
        this.getUsers();
        alert('added');
      });
    }
    else{
      alert("Username already Exists!")
    }

    this.myform.reset();
    this.modalService.dismissAll();
    this.deletedModal(deletedModal, "add");
  }

  private id

  editUser(deletedModal){
    var user = new User();
    user.name = this.editName;
    user.username = this.editUserName;
    user.role = this.editRole;
    user.password = this.editPassword;

   
    this.userService.updateUser(user, this.id).subscribe(
      data => {
        this.getUsers();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
    this.myform.reset();
    this.modalService.dismissAll();
    this.deletedModal(deletedModal, "update");
  }

  deleteUser(deletedModal){
    this.userService.deleteUser(this.id).subscribe(
      data => {
        this.getUsers()
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
    
    this.modalService.dismissAll();
    this.deletedModal(deletedModal, "delete");
  }

  viewUserModal(viewuser, id, index) {
    this.id = id;
    this.index = index;
    this.userService.getUser(id).subscribe(
      data => {
        this.user = data;
        this.getUsers();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
    
    this.modalService.open(viewuser, { centered: true });
  }

  addUserModal(adduser) {
    this.modalService.open(adduser, { centered: true });
  }

  editUserModal(edituser, id, index) {
    this.id=id;
    this.userService.getUser(id).subscribe(
      data => {
        this.user = data;
        this.getUsers();

        for(var i=0; i<this.user.length; i++){
          this.editName = this.user[i].name;
          this.editUserName = this.user[i].username;
          this.editRole = this.user[i].role;
          this.editPassword = this.user[i].password;
          this.editConfirmPassword = "";
        }
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
    
    this.modalService.open(edituser, { centered: true });
  }

  deleteModal(del, id){
    this.id = id;
    this.modalService.open(del, { centered: true });
  }

  deletedModal(deletedModal, action){
    this.modalService.open(deletedModal, { centered: true });
    this.action = action;
  }

  logoutModal(logout){
    this.modalService.open(logout, { centered: true });
  }

  clickLogout(){
      this.authService.logOut();
  }

  clickHistory(id){
    this.logService.userId = id;
    this.router.navigate(['/logs']);
  }

}
