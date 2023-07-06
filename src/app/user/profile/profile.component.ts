import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup|any;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern("^[a-zA-Z].*")])
    let lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern("^[a-zA-Z].*")])
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }
  cancel(){
    this.router.navigate(["/events"])
  }
  saveProfile(formValues:{firstName: string, lastName: string}){
    if(this.profileForm.valid){
    this.authService.saveUpdatedProfile(formValues.firstName, formValues.lastName)
    this.router.navigate(["/events"])
    }
  }
}
