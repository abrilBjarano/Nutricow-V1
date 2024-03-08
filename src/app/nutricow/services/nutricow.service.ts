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
    { emoji: '🚰', counter: 0, upperLimit: 4 },
  ]


  private _kcal: number = 2400;


  private saveLocalStorage(): void {
    const dataToSave = {
      categories: this._categories,
      kcals: this._kcal
    };

    const dataJSON = JSON.stringify(dataToSave);
    localStorage.setItem('history', dataJSON);
  }


  public loadLocalStorage(): void {
    const itemsJSON = localStorage.getItem('history');

    if (itemsJSON) {
      const data = JSON.parse(itemsJSON);
      this._categories = data.categories;
      this._kcal = data.kcals;
    }
  }


  getCategories(): Category[] {
    return [... this._categories];
  }


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
      this.saveLocalStorage();
    }
  }



  // Botones
  addQty( category: Category ) {
    if( category.counter < category.upperLimit )
      category.counter ++;
      this.saveLocalStorage();
  }

  substractQty( category: Category ) {
    if( category.counter > 0 )
      category.counter --;
      this.saveLocalStorage();
  }

  restart() {
    this._categories.forEach( category => {
      category.counter = 0;
    });
    this.saveLocalStorage();
  }

}
