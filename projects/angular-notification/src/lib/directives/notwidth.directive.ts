import { Directive, ElementRef, HostListener, Input , OnInit, Output, EventEmitter } from '@angular/core';
import {Setting } from '../models/settin';

@Directive({
  selector: '[libNotwidth]'
})
export class NotwidthDirective  implements OnInit  {

  constructor(private el: ElementRef) { }

  @Input() notWidth: string;
  @Input('libNotwidth') highlightColor: string;
  @Input() setting: Setting;
  title: any;
  body: any;

  /*private setWidth(width: string) {
    this.el.nativeElement.style.width = width;
  }*/
  ngOnInit(): void {
    this.highlight(this.highlightColor);
    this.setWidth(this.notWidth);
    console.log('seee ', JSON.stringify(this.setting));
    this.setUp(this.setting);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  private setWidth(width: string) {
    this.el.nativeElement.style.width = width;
  }
  private setUp(setting: any) {
    // width
    this.el.nativeElement.style.width = setting.width;

    // classes
    if ( setting.type === 'warn') {
      this.el.nativeElement.classList.add('yellow');
    } else if ( setting.type === 'danger') {
      this.el.nativeElement.classList.add('red');
    } else if ( setting.type === 'okay') {
      this.el.nativeElement.classList.add('green');
    } else {
      this.el.nativeElement.classList.add('default');
    }

    // position
    if ( setting.position === 'bottom right') {
      this.el.nativeElement.classList.add('bottom-right');
    } else if ( setting.position === 'top left') {
      this.el.nativeElement.classList.add('top-left');
    } else if ( setting.position === 'bottom left') {
      this.el.nativeElement.classList.add('bottom-left');
    } else if ( setting.position === 'center') {
      this.el.nativeElement.classList.add('center');
    } else {
      this.el.nativeElement.classList.add('top-right');
    }
    // opacity
    this.el.nativeElement.style.opacity = setting.opacity;

    // background color
    this.el.nativeElement.style.background = setting.background;

    // duration
    this.setDuration(setting.duration);

  }
  private setDuration(time: number) {
    setTimeout(() => {
      this.el.nativeElement.style.display = 'none';
    }, time);
  }

  @HostListener('click') change() {
    console.log(' i see fire');
  }
}
