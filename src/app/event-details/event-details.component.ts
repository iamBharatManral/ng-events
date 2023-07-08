import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EventModel, SessionModel} from "../event.model";
import {AuthService} from "../user/auth.service";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  event: any;
  addMode = false;
  activeButton = 'all'
  activeSort = 'name'
  constructor(private eventsService: EventsService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventsService.getEventById(+params['id'])
      this.addMode = false
      this.sortBy('name')
    })
  }
  saveSession(session: SessionModel){
    this.eventsService.saveNewSession(parseInt(this.route.snapshot.params["id"]), session)
    this.addMode = false
    this.router.navigate(["/events/", this.route.snapshot.params["id"]])
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
  sortBy(value: string){
    this.activeSort = value
    function sortByValue(first:SessionModel, second: SessionModel): number {
      if(value === 'name'){
        if(first.name < second.name){
          return -1
        }else if(first.name > second.name){
          return 1
        }
        return 0
      }else{
        if(first.voters.length < second.voters.length){
          return 1
        }else if(first.voters.length > second.voters.length){
          return -1
        }else{
          return 0
        }
      }

    }
    let eventWithSpecificId = this.eventsService.getEventById(parseInt(this.route.snapshot.params["id"]))
    let sessions = eventWithSpecificId?.sessions.sort(sortByValue)
    this.event = {...this.event, sessions}
  }
}
