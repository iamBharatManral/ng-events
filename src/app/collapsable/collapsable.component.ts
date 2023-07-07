import {Component, Input} from '@angular/core';
import {SessionModel} from "../event.model";

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})
export class CollapsableComponent {
  @Input() name: SessionModel|any;
  isCollapsed = true
  upArrowImage = "assets/images/up-arrow.svg"
  downArrowImage = "assets/images/down-arrow.svg"
  upArrowAlt = "up arrow icon"
  downArrowAlt = "down arrow icon"
  arrow = this.upArrowImage;
  alternate = this.upArrowAlt;
  toggleSession(){
    if(this.isCollapsed){
      this.arrow = this.downArrowImage
      this.alternate = this.downArrowAlt
    }else{
      this.arrow = this.upArrowImage
      this.alternate = this.upArrowAlt
    }
    this.isCollapsed = !this.isCollapsed
  }
}
