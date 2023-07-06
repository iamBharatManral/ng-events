import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionModel} from "../event.model";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  event: any;
  addMode = false;
  constructor(private eventsService: EventsService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.event = this.eventsService.getEventById(parseInt(this.route.snapshot.params["id"]))
  }
  saveSession(session: SessionModel){
    this.eventsService.saveNewSession(parseInt(this.route.snapshot.params["id"]), session)
    this.addMode = false
  }
  toggleAddMode(){
    this.addMode = !this.addMode
  }
}
