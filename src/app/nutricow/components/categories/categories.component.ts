import { Component, OnInit } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'nutricow-categories',
  templateUrl: './categories.component.html',
  styles: `
    .zoom-out {
      transform: scale(.9);
      transform-origin: top center;
    }
  `
})
export class CategoriesComponent implements OnInit {

  public categories!: Category[];

  constructor( private nutricowService: NutricowService ) {};

  ngOnInit(): Category[] {

    return this.categories = this.nutricowService.getCategories();
  }

}
