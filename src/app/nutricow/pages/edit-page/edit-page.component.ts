import { Component } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'nutricow-edit-page',
  templateUrl: './edit-page.component.html',
  styles: ``
})
export class EditPageComponent {

  public emojiButton: string = '💾';

  constructor( private nutricowService: NutricowService ) {}

  updateKCal( kcal: number ) {
    this.nutricowService.setKCal( kcal );
  }
}
