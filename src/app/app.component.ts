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
      type: 'green',
      title: 'uuunjnkkjnjnjnnkj',
      body: 'oiuztrewsdfghjkl',
      position: 'center',
      opacity: '1'
    };
    this.Service.setProperties(this.setting);

  }
}
