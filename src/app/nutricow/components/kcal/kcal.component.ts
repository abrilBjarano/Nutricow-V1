import { Component } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'nutricow-kcal',
  templateUrl: './kcal.component.html',
  styles: ``
})
export class KcalComponent {

  constructor( private nutricowService: NutricowService ) {}

  getKcal(): number {
    return this.nutricowService.getKcal();
  }

}
