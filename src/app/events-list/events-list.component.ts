import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {EventModel} from "../event.model";


@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit{
  events: EventModel[]| undefined;
  constructor(private eventsService: EventsService) {
  }
  ngOnInit() {
    this.events = this.eventsService.getEvents()
  }
}
