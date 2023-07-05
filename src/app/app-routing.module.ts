import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsListComponent} from "./events-list/events-list.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";

const routes: Routes = [
  {path: "events/new", component: CreateEventComponent},
  { path: 'events', component: EventsListComponent },
  {path: "events/:id", component: EventDetailsComponent},
  {path: "", redirectTo: "/events", pathMatch: "full"},
  {path: "404", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
