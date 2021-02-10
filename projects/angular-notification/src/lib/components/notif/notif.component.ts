import { Component, OnInit } from '@angular/core';
import { NotwidthDirective } from '../../directives/notwidth.directive';
import {Setting } from '../../models/settin';

@Component({
  selector: 'lib-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  color: string;
  setting: Setting;
  open = true;
  constructor() { }

  ngOnInit(): void {
    this.color = 'purple';
    this.setting = {
      width: '100px',
      type: 'warn',
      title: 'ooooo',
      body: 'ooppp',
      position: 'top right',
      opacity: '0.6'
    };
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
      opacity: '0.6'
    };
  }

  close(): void {
    this.open = false;
  }

}
