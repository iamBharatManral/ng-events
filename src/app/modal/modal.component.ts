import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventsService} from "../events.service";
import {SessionModel} from "../event.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  @Input() searchTerm = ""
  @Input() search : any;
  @Output() closeAndClear = new EventEmitter<boolean>
  sessions: {session: SessionModel, id: number}[]|any;
  constructor(private eventService: EventsService, private router: Router) {
  }
  ngOnInit() {
    let sessions: {session: SessionModel, url: string}[]|any = []
    this.eventService.getEvents()
      .filter(event => event.sessions
        .map(session => {
          if(session.name.toLowerCase().includes(this.searchTerm.toLowerCase())){
            sessions.push({session, id: event.id})
          }
        }
      ))
    this.sessions = sessions
  }
  route(id: number){
    this.closeAndClear.emit(false)
    this.router.navigate(["/events/", id])
  }

}
