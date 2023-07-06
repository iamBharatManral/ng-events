import { Component } from '@angular/core';
import {Form, FormControl, FormsModule, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
  }
  login(formValue:{username: string, password: string}){
    this.authService.loginUser(formValue.username, formValue.password)
    this.router.navigate(["events"])
  }
  cancel(){
    this.router.navigate(["events"])
  }

}
