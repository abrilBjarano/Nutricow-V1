import { Component } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'nutricow-landing-page',
  templateUrl: './landing-page.component.html',
  styles: ``
})
export class LandingPageComponent {

  constructor( private nutricowService: NutricowService ) {}

  public emojiButton: string = '🔄️';

  restart() {
    this.nutricowService.restart();
  }

}
