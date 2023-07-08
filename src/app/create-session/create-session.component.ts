import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionModel} from "../event.model";
import {NotificationService} from "../notification.service";
import {EventsService} from "../events.service";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit{
  @Output() createSession = new EventEmitter<SessionModel>()
  @Output() cancelAddMode = new EventEmitter<boolean>()
  newSessionForm: FormGroup | any;
  name: FormControl | any;
  presenter: FormControl | any;
  duration: FormControl | any;
  abstract: FormControl | any;
  level: FormControl | any;
  constructor(private router: Router, private notification: NotificationService, private eventService: EventsService, private route: ActivatedRoute) {
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
      id: this.eventService.getNextSessionId(this.route.snapshot.params['id']),
      name: formValues.name,
      presenter: formValues.presenter,
      level: formValues.presenter,
      abstract: formValues.abstract,
      duration: formValues.duration,
      voters: []
    }
    this.createSession.emit(session)
    this.notification.success()
  }
  cancel(){
    this.cancelAddMode.emit(false)
  }
}
