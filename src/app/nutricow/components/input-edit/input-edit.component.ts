import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'nutricow-input-edit',
  templateUrl: './input-edit.component.html',
  // styleUrl: './input-edit.component.css'
})
export class InputEditComponent {

  emojis: string[] = ['🥛', '🍇', '🥦', '🌱', '🥩', '🥑', '🥜', '🎑', '🚰'];

  @Input() public kcal!: number;
  @Input() public upL_L!: number;
  @Input() public upL_F!: number;
  @Input() public upL_V!: number;
  @Input() public upL_Leg!: number;
  @Input() public upL_C!: number;
  @Input() public upL_GS!: number;
  @Input() public upL_GC!: number;
  @Input() public upL_Cer!: number;
  @Input() public upL_A!: number;
}
