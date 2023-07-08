import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {VotingService} from "../voting.service";

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit{
  isVoted: boolean|any;
  votedImage = ""
  upVoteImage = "assets/images/heart-plus.svg"
  downVoteImage = "assets/images/heart-minus.svg"
  voteCount: any = 0;
  isLoggedIn = this.voting.isLoggedIn
  @Input() sessionId: number | any;
  eventId = parseInt(this.route.snapshot.params["id"])
  constructor(private route: ActivatedRoute, private voting: VotingService) {
  }
  ngOnInit() {
    this.voteCount = this.voting.getAllVotes(this.eventId, parseInt(this.sessionId))
    this.isVoted = this.voting.isCurrentUserVoted(this.eventId,this.sessionId)
    if(this.isVoted){
      this.votedImage = this.downVoteImage
    }else{
      this.votedImage = this.upVoteImage
    }
  }
  toggleVote(){
    let eventId = parseInt(this.route.snapshot.params["id"])
    let sessionId = parseInt(this.sessionId)
    if(this.isVoted){
      this.voting.removeVote(eventId, sessionId)
      this.votedImage = this.upVoteImage
    }else{
      this.voting.addVote(eventId, sessionId)
      this.votedImage = this.downVoteImage
    }
    this.isVoted = !this.isVoted
    this.voteCount = this.voting.getAllVotes(this.eventId, parseInt(this.sessionId))
  }
}
