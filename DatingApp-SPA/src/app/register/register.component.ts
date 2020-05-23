import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
   // Input is used when passing value from
  // parent to child. valuesFromHome is property used in home component
  // output property uses event emitter

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // register(){
  //   console.log(this.model);
  // }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
