import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionModel} from "../event.model";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit{
  newSessionForm: FormGroup | any;
  name: FormControl | any;
  presenter: FormControl | any;
  duration: FormControl | any;
  abstract: FormControl | any;
  level: FormControl | any;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.name = new FormControl("", Validators.required)
    this.presenter = new FormControl("", Validators.required)
    this.duration = new FormControl("", Validators.required)
    this.level = new FormControl("", Validators.required)
    this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400)])
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues: any){
    let session: SessionModel= {
      id: 1,
      name: formValues.name,
      presenter: formValues.presenter,
      level: formValues.presenter,
      abstract: formValues.abstract,
      duration: formValues.duration,
      voters: []
    }
    this.router.navigate(["/events"])
  }
  cancel(){
    this.router.navigate(["/events"])
  }
}
