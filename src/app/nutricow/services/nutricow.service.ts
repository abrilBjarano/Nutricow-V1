import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class NutricowService {

  private _categories: Category[] = [
    { emoji: '🥛', counter: 0, upperLimit: 1 },
    { emoji: '🍇', counter: 0, upperLimit: 3 },
    { emoji: '🥦', counter: 0, upperLimit: 4 },
    { emoji: '🌱', counter: 0, upperLimit: 0 },
    { emoji: '🥩', counter: 0, upperLimit: 5 },
    { emoji: '🥑', counter: 0, upperLimit: 2 },
    { emoji: '🥜', counter: 0, upperLimit: 1 },
    { emoji: '🎑', counter: 0, upperLimit: 6 },
    { emoji: '🚰', counter: 0, upperLimit: 5 },
  ]

  getCategories(): Category[] {
    return [... this._categories];
  }

  addQty( category: Category ) {
    if( category.counter < category.upperLimit )
      category.counter ++;
  }

  substractQty( category: Category ) {
    if( category.counter > 0 )
      category.counter --;
  }

}
