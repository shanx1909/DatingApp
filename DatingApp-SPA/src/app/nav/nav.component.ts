import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // create object
  model: any = {};

  // Add the service
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

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
        this.alertify.success('logged in successfully');
      }, error => {
        this.alertify.error(error);
      });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  // If logged out remove the token
  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
