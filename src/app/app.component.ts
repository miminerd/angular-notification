import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notification';
  setting: any;
  ngOnInit(): void {
    this.setting = {
      width: '450px',
      type: 'green',
      title: 'uuunjnkkjnjnjnnkj',
      body: 'oiuztrewsdfghjkl',
      position: 'center',
      opacity: '1'
    };
  }
}
