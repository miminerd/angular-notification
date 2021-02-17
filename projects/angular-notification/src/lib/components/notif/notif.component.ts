import { Component, OnInit ,  Output, EventEmitter} from '@angular/core';
import { NotwidthDirective } from '../../directives/notwidth.directive';
import {Setting } from '../../models/settin';
import { AngularNotificationService } from '../../angular-notification.service';

@Component({
  selector: 'lib-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  color: string;
  setting: Setting;
  open = true;
  constructor(private Service: AngularNotificationService) { }

  ngOnInit(): void {
    this.color = 'purple';
    this.setting = {
      width: '100px',
      type: 'warn',
      title: 'ooooo',
      body: 'ooppp',
      position: 'bottom right',
      opacity: '1',
      duration: 40000,
      background: 'red'
    };
    this.setting = this.Service.getProperties();
  }

  close(): void {
    this.open = false;
  }
}
