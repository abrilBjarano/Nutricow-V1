import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { BehaviorSubject } from 'rxjs';

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

  private categoriesSubject = new BehaviorSubject<Category[]>(this._categories);
  categories$ = this.categoriesSubject.asObservable();


  getCategories(): Category[] {
    return [... this._categories];
  }

  private _kcal: number = 2400;

  getKcal(): number {
    return this._kcal;
  }

  setKCal(kcal: number) {
    this._kcal = kcal;
  }


  getUpperLimitByEmoji(emoji: string): number {
    const category = this._categories.find(cat => cat.emoji === emoji);
    return category ? category.upperLimit : 0;
  }

  setUpperLimitForCategory(emoji: string, upperLimit: number): void {
    const category = this._categories.find(cat => cat.emoji === emoji);
    if (category) {
      category.upperLimit = upperLimit;
    }
  }



  // Botones
  addQty( category: Category ) {
    if( category.counter < category.upperLimit )
      category.counter ++;
  }

  substractQty( category: Category ) {
    if( category.counter > 0 )
      category.counter --;
  }

  restart() {
    this._categories.forEach( category => {
      category.counter = 0;
    })
  }

}
