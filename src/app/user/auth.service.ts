import { Injectable } from '@angular/core';
import {UserModule} from "./user.module";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: UserModule| any;
  loginUser(username: string, password: string){
    this.currentUser = {
      id: 1,
      username: username,
      firstName: "John",
      lastName: "Papa"
    }
  }
  isAuthenticated(){
    return !!this.currentUser
  }

  constructor() { }
}
