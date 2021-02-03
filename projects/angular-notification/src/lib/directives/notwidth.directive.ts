import { Directive, ElementRef, HostListener, Input , OnInit} from '@angular/core';

@Directive({
  selector: '[libNotwidth]'
})
export class NotwidthDirective  implements OnInit  {

  constructor(private el: ElementRef) { }

  @Input() notWidth: string;
  @Input('libNotwidth') highlightColor: string;

  /*private setWidth(width: string) {
    this.el.nativeElement.style.width = width;
  }*/
  ngOnInit(): void {
    this.highlight(this.highlightColor);
    this.setWidth(this.notWidth);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  private setWidth(width: string) {
    this.el.nativeElement.style.width = width;
  }
}
