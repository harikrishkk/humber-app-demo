import { Directive, ElementRef, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  // Bind properties
  @HostBinding('class.boxShadow') isHover: boolean = false;


  // Listen to events
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.isHover = true;
  }

  @HostListener('mouseleave') mouseOut(eventData: Event) {
    this.isHover = false;
  }

  @HostListener('click') mouseClick(eventData: Event) {

  }

  constructor(private elementRef: ElementRef) {

  }

}
