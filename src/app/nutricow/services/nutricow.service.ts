import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class NutricowService {

  private categories: Category[] = [
    { emoji: '🧀', counter: 0, upperLimit: 1 },
    { emoji: '🍇', counter: 0, upperLimit: 3 },
    { emoji: '🥦', counter: 0, upperLimit: 4 },
    { emoji: '🌱', counter: 0, upperLimit: 0 },
    { emoji: '🥩', counter: 0, upperLimit: 5 },
    { emoji: '🥑', counter: 0, upperLimit: 2 },
    { emoji: '🥜', counter: 0, upperLimit: 1 },
    { emoji: '🎑', counter: 0, upperLimit: 6 },
    { emoji: '🚰', counter: 0, upperLimit: 5 },
  ]

  public getCategories(): Category[] {
    return [... this.categories];
  }

}
