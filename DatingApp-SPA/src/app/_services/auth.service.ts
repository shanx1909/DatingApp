import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

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
      }
    })
  );
 }

 register(model: any){
   return this.http.post(this.baseUrl + 'register', model);
 }
}
