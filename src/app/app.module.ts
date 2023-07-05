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

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    HeaderComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
