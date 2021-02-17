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

 // @Output() DatePicked: EventEmitter<any> = new EventEmitter<any>();

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
    console.log('eee ', this.Service.getProperties());
    this.setting = this.Service.getProperties();
    console.log('ddd ', this.setting);
  }
  change(): void {
    console.log('in change');
    this.color = 'green';
    // this.setting.width = '30%';
    this.setting = {
      width: '20px',
      type: 'warn',
      title: 'hhjjj',
      body: 'poiuztre',
      position: '',
      opacity: '0.6',
      duration: 40000,
      background: 'red'
    };

//    this.DatePicked.emit(this.setting);
  }

  close(): void {
    this.open = false;
  }
}
