import { Component, OnInit } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'nutricow-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  public categories!: Category[];

  constructor( private nutricowService: NutricowService ) {};

  ngOnInit(): Category[] {
    this.nutricowService.loadLocalStorage();
    return this.categories = this.nutricowService.getCategories();
  }

  loadCategories(): void {
    this.categories = this.nutricowService.getCategories();
  }

  addQty( category: Category ): void {
    this.nutricowService.addQty( category );
  }

  substractQty( category: Category ): void {
    this.nutricowService.substractQty( category );
  }


}
