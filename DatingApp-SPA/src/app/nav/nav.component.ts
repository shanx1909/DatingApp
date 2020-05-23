import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // create object
  model: any = {};

  // Add the service
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // This will print the username and password on the console
  // login() {
  //   console.log(this.model);
  // }

  // Comment the above method, this login method is used to call auth service login
  // method which calls the API just like postman request
  // When a method is called subscribe is used. Subscribe has 2 parameter
  login() {
    this.authService.login(this.model)
      .subscribe(next => {
        console.log('logged in successfully');
      }, error => {
        console.log(error);
      });
  }

  // If logged in store the token received from response
  loggedIn()  {
    const token = localStorage.getItem('token');
    return !!token; // double ! returns true or false, if it has value returns true or false,
    // so it is shorthand for if and else
  }

  // If logged out remove the token
  logOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
