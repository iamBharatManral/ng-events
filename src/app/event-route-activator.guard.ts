import {CanActivateFn, createUrlTreeFromSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {EventsService} from "./events.service";

export const eventRouteActivatorGuard: CanActivateFn = (route, state) => {
  return inject(EventsService).getEvents().find(event => event.id == route.params["id"])
    ? true
    : createUrlTreeFromSnapshot(route, ["/", "404"])
};
