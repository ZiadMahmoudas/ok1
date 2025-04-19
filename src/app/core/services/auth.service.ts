import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/core/models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;
  constructor(private http:HttpClient) {
    this.url = environment.baseurl;
   }

  token:string = "User_Token" /* Key For Token */

/* Save For Token */
  storeToken(Token: string) {
    localStorage.setItem(this.token, Token);
  }

  getToken(): string  {
    return localStorage.getItem(this.token);
  }
/* unSubscribe For Token  */
  removeToken(){
    localStorage.removeItem(this.token);
  }
/*  Register */
postReg(data: User) {
   const url1 = `${this.url}register`;
    return this.http.post(url1, data);
  }
/*  Register End*/

/* Login */
postLog(data:User){
  const urlLog = `${this.url}login`;
  return this.http.post(urlLog,data);
 }
 /* Login End */
}
