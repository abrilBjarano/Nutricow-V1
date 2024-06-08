import { Component } from '@angular/core';
import { FoodComponent } from '../../components/food/food.component';

@Component({
  selector: 'nutricow-info-page',
  templateUrl: './info-page.component.html',
  styles: ``
})
export class InfoPageComponent {

  public subtitle: string = 'Lista de alimentos y cantidades por categoría'


}
