import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EventModel, SessionModel} from "../event.model";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  event: any;
  addMode = false;
  activeButton = 'all'
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
  setActive(button: string){
    this.activeButton = button
    let eventOfSpecificId = this.eventsService.getEventById(parseInt(this.route.snapshot.params["id"]))
    // @ts-ignore
    let sessions = eventOfSpecificId?.sessions.filter((session: SessionModel) => {
      if(this.activeButton === 'all'){
        return true
      }
      return session.level.toLowerCase() === this.activeButton
    })
    this.event = {...this.event, sessions}
  }
}
