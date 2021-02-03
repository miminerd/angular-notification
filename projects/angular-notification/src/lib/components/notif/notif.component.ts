import { Component, OnInit } from '@angular/core';
import { NotwidthDirective } from '../../directives/notwidth.directive';

@Component({
  selector: 'lib-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  color: string;
  constructor() { }

  ngOnInit(): void {
    this.color = 'purple';
  }
  change(): void {
    console.log('in change');
    this.color = 'green';
  }

}
