import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userTokenData = new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.decodeUserData()
    }
  }
  decodeUserData(){
    let encodeToken =  JSON.stringify(localStorage.getItem('userToken'))
    let decodeToken:any = jwtDecode(encodeToken)
    this.userTokenData.next(decodeToken);
    // this.userTokenData=decodeToken;
  }

  // *********** API Function ***************
  signUp(formData:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formData)
  }
  sigIn(formData:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formData)
  }
// *********** logout Function ***************
  logOut(){
    localStorage.removeItem('userToken');
    this.userTokenData.next(null)
    this._Router.navigate(['/signin'])
  }
  // *********** forgotPasswords Function ***************
  forgotPasswords(formData:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,formData)
  }
  // *********** verifyCode Function ***************
  verifyCode(formData:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,formData)
  }
  // *********** resetPassword Function ***************
  resetPassword(formData:any):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,formData)
  }

}
