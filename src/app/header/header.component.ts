import { Component } from '@angular/core';
import {AuthService} from "../user/auth.service";
import {Router} from "@angular/router";
import {Form} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: any;
  searchTerm = ""
  modalActive = false
  constructor(private authService: AuthService, private router: Router) {
  }

  isAuthenticated(): boolean{
    if(this.authService.isAuthenticated()){
      this.username = this.authService.currentUser.username
      return true
    }
    return false
  }
  search(formValues: {searchTerm: string}){
    this.modalActive = true
    this.searchTerm = formValues.searchTerm
  }
  closeAndClear(modalStatus: boolean){
    this.modalActive = modalStatus
    this.searchTerm = ""
  }
  clearSearch(searchTerm: string){
    this.searchTerm = searchTerm
  }

  logout() {
    this.authService.logout()
    this.router.navigate(["/events"])
  }
}
