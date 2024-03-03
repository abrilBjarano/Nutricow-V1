import { Component, Input} from '@angular/core';

@Component({
  selector: 'nutricow-input-edit',
  templateUrl: './input-edit.component.html',
  // styleUrl: './input-edit.component.css'
})
export class InputEditComponent {

  emojis: string[] = ['🥛', '🍇', '🥦', '🌱', '🥩', '🥑', '🥜', '🎑', '🚰'];

  @Input() public kcal!: number;

}
