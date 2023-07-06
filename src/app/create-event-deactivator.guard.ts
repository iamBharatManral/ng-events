import {CanActivateFn, CanDeactivateFn} from '@angular/router';
import {Component, inject} from "@angular/core";
import {CreateEventComponent} from "./create-event/create-event.component";

export const createEventDeactivatorGuard: CanDeactivateFn<CreateEventComponent> = (component: CreateEventComponent) => {
  return component.isValid ? window.confirm("You have not saved this event. Do you really want to cancel it?") : true
};
