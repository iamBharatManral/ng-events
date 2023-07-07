import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Form, FormsModule} from "@angular/forms";
import {EventsService} from "../events.service";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
    isValid: boolean = false
    constructor(private router: Router, private eventService: EventsService, private notification: NotificationService) {
    }
    cancel(){
        this.router.navigate(["/events"])
    }
    saveEvent(formValue: Form){
      this.eventService.saveEvent(formValue)
      this.notification.success()
      this.router.navigate(["/events"])
    }
}
