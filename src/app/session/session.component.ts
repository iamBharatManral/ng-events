import {Component, Input} from '@angular/core';
import {SessionModel} from "../event.model";
import {AuthService} from "../user/auth.service";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  @Input() session: SessionModel|any;
  constructor(private authService: AuthService) {
  }
  isAuthenticated(): boolean{
    return this.authService.isAuthenticated()
  }
}
