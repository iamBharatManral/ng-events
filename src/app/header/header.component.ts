import { Component } from '@angular/core';
import {AuthService} from "../user/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: any;
  constructor(private authService: AuthService) {
  }

  isAuthenticated(): boolean{
    if(this.authService.isAuthenticated()){
      this.username = this.authService.currentUser.username
      return true
    }
    return false
  }
}
