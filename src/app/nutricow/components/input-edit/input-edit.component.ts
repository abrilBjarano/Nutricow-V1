import { Component, EventEmitter, Output } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'nutricow-input-edit',
  templateUrl: './input-edit.component.html',
  styleUrl: './input-edit.component.css'
})
export class InputEditComponent {

  emojis: string[] = ['🥛', '🍇', '🥦', '🌱', '🥩', '🥑', '🥜', '🎑', '🚰'];
  kcal!: number;
  public emojiButton: string = '💾';

  constructor( private nutricowService: NutricowService ) {}

  ngOnInit() {
    this.kcal = this.nutricowService.getKcal();
  }

  KCal() {
    this.nutricowService.getCategories();
  }

  updateKCal( kcal: number ) {
    this.nutricowService.setKCal( kcal );
  }
}
