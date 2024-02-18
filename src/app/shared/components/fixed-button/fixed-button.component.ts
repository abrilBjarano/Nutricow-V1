import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-fixed-button',
  templateUrl: './fixed-button.component.html',
  styleUrl: './fixed-button.component.css'
})
export class FixedButtonComponent {

  @Input() public emoji: string = '';

}
