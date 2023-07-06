import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { HeaderComponent } from './header/header.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    HeaderComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
