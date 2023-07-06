import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./user/profile/profile.component";
import {LoginComponent} from "./user/login/login.component";


const routes: Routes =[{
  path: "profile", component: ProfileComponent
},
  {path: "login", component: LoginComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
