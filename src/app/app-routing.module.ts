import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsListComponent} from "./events-list/events-list.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {eventRouteActivatorGuard} from "./event-route-activator.guard";
import {createEventDeactivatorGuard} from "./create-event-deactivator.guard";
import {CreateSessionComponent} from "./create-session/create-session.component";

const routes: Routes = [
  {path: "events/new", component: CreateEventComponent, canDeactivate: [createEventDeactivatorGuard]},
  { path: 'events', component: EventsListComponent },
  {path: "events/:id", component: EventDetailsComponent, canActivate: [eventRouteActivatorGuard]},
  {path: "events/session/new", component: CreateSessionComponent},
  {path: "", redirectTo: "/events", pathMatch: "full"},
  {path: "404", component: NotFoundComponent },
  {path: "user", loadChildren: () => import("./user/user.module").then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
