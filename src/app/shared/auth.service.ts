import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// function to set data in local storage
  userData = new BehaviorSubject(null);
  getUserDataFromLocal(){
    let userToken = JSON.stringify(localStorage.getItem('userData'))
    this.userData.next( jwtDecode(userToken))
  }
  // function to remove data in local storage
  logOut()
  {
    localStorage.removeItem('userData');
    this.userData.next(null)
    this._Router.navigate(['/shared/login'])
  }
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  // api for register
  registerUserDetails(formData: any): Observable < any > {
    return this._HttpClient.post(`https://dev.lun.sa/Admin/api/register`,formData)
}
// api for login
  loginUserDetails(userData: any): Observable<any> {
    return this._HttpClient.post(`https://dev.lun.sa/Admin/api/login`, userData)
  }
}
