import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libNotwidth]'
})
export class NotwidthDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;


  private setWidth(width: string) {
    this.el.nativeElement.style.width = width;
  }

}
