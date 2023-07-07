import { Injectable } from '@angular/core';
// @ts-ignore
import { alert, confirm } from 'notie'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  success(){
    alert({
      type: "success",
      text: "Success"
    })
  }
}
