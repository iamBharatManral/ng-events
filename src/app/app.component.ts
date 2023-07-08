import {Component, OnInit} from '@angular/core';
import {AuthService} from "./user/auth.service";
import {EventsService} from "./events.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private eventService: EventsService) {
  }
  ngOnInit() {
    this.authService.isAuthenticated()
    this.eventService.initializeEvents()
  }

}
