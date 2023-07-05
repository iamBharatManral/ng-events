import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  events =[
    {
      id: 1,
      name: 'Angular Connect',
      date: "2023/06/12",
      time: "23:00",
      price: 599.99,
      imageUrl: "/assets/images/angularconnect-shield.png",
      location: {
        address: "1057 DT",
        city: 'London',
        country: "Englang"
      }
    }
  ]
}
