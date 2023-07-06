import {Component, Input} from '@angular/core';
import {SessionModel} from "../event.model";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  @Input() session: SessionModel|any;
}
