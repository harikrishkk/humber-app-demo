import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor = 'yellow'
  @Input() defaultColor = 'transparent';

  @HostBinding('style.backgroundColor') bgColor!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseEnter() {
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseout') mouseOut() {
    this.bgColor = this.defaultColor
  }


}
