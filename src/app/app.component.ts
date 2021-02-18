import { Component, OnInit } from '@angular/core';
import { AngularNotificationService  } from 'angular-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notification';
  setting: any;

  constructor(private Service: AngularNotificationService) { }

  ngOnInit(): void {
    this.setting = {
      width: '450px',
      type: 'danger',
      title: 'title of the notification',
      body: 'this is some <b>content</b> of the notification support html tags as well',
      position: 'top right',
      duration: 70000,
    };
    this.Service.setProperties(this.setting);

  }
}
