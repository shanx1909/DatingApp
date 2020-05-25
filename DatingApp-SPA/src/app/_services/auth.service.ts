import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwthelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

// Here login method will work as a post request
// which we used to do from Postman
// Loginmethod will be called from the nav bar, and model of
// nav bar contains the username and password which it gets from the html 
// controls and pass to the nav bar model
// This post request returns an Observable of response
login(model: any) {
 return this.http.post(this.baseUrl + 'login', model).pipe(
   map((response: any) => {
     const user = response; // save response in user
     if (user) {
      localStorage.setItem('token', user.token); // now store the token received from the response in storage
      this.decodedToken = this.jwthelper.decodeToken(user.token);
      console.log(this.decodedToken);
      }
    })
  );
 }

 register(model: any){
   return this.http.post(this.baseUrl + 'register', model);
 }

 loggedIn() {
   const token = localStorage.getItem('token');
   return !this.jwthelper.isTokenExpired(token);
 }

}
