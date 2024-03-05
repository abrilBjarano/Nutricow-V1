import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-subtitle',
  templateUrl: './subtitle.component.html',
  styles: ``
})
export class SubtitleComponent {

  @Input() public subtitle!: string;

}
