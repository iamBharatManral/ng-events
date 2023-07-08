import { Injectable } from '@angular/core';
import {EventsService} from "./events.service";
import {AuthService} from "./user/auth.service";

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  isLoggedIn: boolean| any;

  constructor(private eventService: EventsService, private authService: AuthService) {
    this.isLoggedIn = !!this.authService.currentUser
  }
  getAllVotes(eventId: number, sessionId: number): number{
    // @ts-ignore
    return this.eventService.getEventById(parseInt(String(eventId)))?.sessions.filter(session => session.id === sessionId)[0].voters.length
  }
  addVote(eventId: number, sessionId: number){
    this.eventService.addVoteForSession(eventId, sessionId)
  }
  removeVote(eventId: number, sessionId: number){
    this.eventService.removeVoteFromSession(eventId, sessionId)
  }
  isCurrentUserVoted(eventId: number, sessionId: number): boolean{
   let currentUser = this.authService.currentUser?.username
    if(currentUser){
      // @ts-ignore
      return this.eventService.isCurrentUserVotedForSession(eventId, sessionId)
    }
    return false
  }
}
