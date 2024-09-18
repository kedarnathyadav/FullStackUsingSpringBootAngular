import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticateUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  

  executeJWTAuthenticationService(username: string, password: string){
   
   

      return this.http.post<any>(
        `${API_URL}/authenticate`,{username,password}).pipe(
          map(
            data =>{
              sessionStorage.setItem(AUTHENTICATED_USER, username);
              sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
              return data;
            }
          )
        );

    // console.log("Execute Hello World Bean Service");
  }
  executeAuthenticationService(username: string, password: string){
   
    let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password);
    
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

      return this.http.get<AuthenticationBean>(
        `${API_URL}/basicauth`,
        {headers : header}).pipe(
          map(
            data =>{
              sessionStorage.setItem(AUTHENTICATED_USER, username);
              sessionStorage.setItem(TOKEN, basicAuthHeaderString);
              return data;
            }
          )
        );

    // console.log("Execute Hello World Bean Service");
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN)
    
    return null; 
  }

  isUserLoggedIn(): boolean {
    if (this.isSessionStorageAvailable()) {
      let user = sessionStorage.getItem(AUTHENTICATED_USER);
      return !(user === null);
    }
    return false;
  }

  logout(): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.removeItem(AUTHENTICATED_USER);
      sessionStorage.removeItem(TOKEN);
    }
  }

  // Check if sessionStorage is available
  private isSessionStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
  }
}

export class AuthenticationBean {
  constructor(public message : string){}
}