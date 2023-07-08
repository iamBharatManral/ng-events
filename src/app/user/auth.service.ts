import {Injectable} from '@angular/core';
import {UserModule} from "./user.module";

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  userCount = 1
  currentUser: UserModule | any;

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: this.userCount++, username: username, firstName: username, lastName: ""
    }
    localStorage.setItem('username', username)
    localStorage.setItem("id", this.currentUser.id)
    localStorage.setItem('password', password)
  }

  isAuthenticated() {
    let username = localStorage.getItem('username')
    if (username) {
      this.currentUser = {
        id: localStorage.getItem("id"), username: username, firstName: username, lastName: ""
      }
    }
    return !!this.currentUser
  }

  saveUpdatedProfile(firstName: string, lastName: string) {
    this.currentUser = {
      ...this.currentUser, firstName: firstName, lastName: lastName
    }
  }

  constructor() {
  }

  logout() {
    this.currentUser = undefined
    localStorage.removeItem('username')
    localStorage.removeItem('id')
    localStorage.removeItem('password')
  }
}
