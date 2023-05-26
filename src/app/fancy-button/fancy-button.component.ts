import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-button',
  templateUrl: './fancy-button.component.html',
  styleUrls: ['./fancy-button.component.css']
})
export class FancyButtonComponent {
  @Input() text!: string;
  @Input() customClass: string = 'primary';
  @Input() hasIcon: boolean = false;
}
