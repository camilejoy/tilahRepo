import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from './user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService) { }

  private url:String = "https://tilah-system.herokuapp.com";
  //private headers = new HttpHeaders().set('Content-Type', 'application/json');

  // addUser(user: User):Observable<any>{
  //   return this.http.post<any>(
  //     this.url + "/user",
  //     user
  //     //{headers: this.headers}
  //   );
  // }

  logInUser(user: User):Observable<any>{
    return this.http.post<any>(
      this.url + "/user/login",
      user
      // {headers: this.headers}
    );
  }

  loggedIn(){
    this.userService.currentUser = localStorage.getItem('userId');
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
