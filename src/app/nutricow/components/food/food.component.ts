import { Component } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'nutricow-food',
  templateUrl: './food.component.html',
  styles: ``
})
export class FoodComponent {

  categories!: Category[];

  constructor( private nutricowService: NutricowService ) {
    this.categories = this.nutricowService.getCategories();
  }

  addQty( category: Category ){
    this.nutricowService.addQty(category);
  }

  public titles: string[] = [
    '🥛. Lácteos',
    '🍇. Frutas',
    '🥦. Verduras',
    '🌱. Leguminosas',
    '🥩. Carnes',
    '🥑. Grasas sin proteina',
    '🥜. Grasas con proteína',
    '🎑. Cereales',
  ]

  public subtitles: string[] = [
    'lacteo',
    'fruta',
    'verdura',
    'leguminosa',
    'carne',
    'grasaSP',
    'grasaCP',
    'cereal',
  ]

  public items: string[][] = [
    ['Leche de almendras ó soya: 1 taza', 'Leche light: 1 taza', 'Queso cottage: 3 cda', 'Yogurt bebible light natural: 250 ml', 'Yogurt griego natural: ¾'],['* Melón: 1 taza', '* Piña: ¾ taza', '* Plátano: ½ pieza', '* Sandía: 1 taza', 'Ciruela Fresca: 2 piezas', 'Durazno Fresco: 2 piezas', 'Fresas: 1 taza', 'Frutas Varias: 1 taza', 'Guayaba: 3 piezas', 'Manzanas: 1 pieza', 'Moras: ¾ taza', 'Naranja: 1 pieza', 'Papaya: 1 taza', 'Pasas: 10 piezas', 'Peras: ½ pieza', 'Toronja: 1 pieza', 'Uvas: 18 piezas'],
    ['Betabel cocido: ½ taza', 'Acelga cocida: ½ taza', 'Apio: 1 ½ taza', 'Berenjena cocida: ¾ taza', 'Brócoli: 1 taza', 'Calabacita: 1 pieza', 'Champiñones: ½ taza', 'Chayote: ½ pieza', 'Chícharo cocido: ⅕ taza', 'Col: ½ taza', 'Coliflor: ¾ taza', 'Ejotes: ½ taza', 'Espinaca cocida: ½ taza', 'Espinaca cruda: 2 tazas', 'Jícama: ½ taza', 'Lechuga: 3 tazas', 'Nopal: 1 taza', 'Pepino: 1 ¼ taza', 'Pimiento: 1 taza', 'Tomate: 1 pieza', 'Zanahoria Cruda picada: ½ taza', '* Zanahoria Cocida: ½ taza'],
    ['Frijoles cocidos: ½ taza', 'Garbanzos: ½ taza', 'Lentejas cocidas: ½ taza', 'Hummus: 5 cdas', 'Haba cocida: ½ taza'],
    ['Atún: ½ lata', 'Bistec de res: 30 gramos', 'Carne de res molida: 30 gramos', 'Clara de huevo: 2 piezas', 'Filete de pescado: 30 gramos', 'Huevo: 1 pieza (2-3 veces x semana)', 'Jamón de pechuga de pavo: 2 reb', 'Milanesa de res: 30 gramos', 'Pollo sin piel: 30 gramos', 'Queso Oaxaca Light: 40 gramos', 'Queso Panela: 40 gramos', 'Salchicha de Pechuga de Pavo: 1 pieza'],
    ['Aceite: 1 cdita', 'Aderezo light: ½ cdita', 'Aguacate: ⅓ pieza', 'Crema light: 1 Cda', 'Mantequilla sin sal: 1 ½ cditas', 'Mayonesa light: 1 cdita', 'Vinagreta: 1 C'],
    ['Almendras: 10 piezas', 'Cacahuate: 14 piezas', 'Crema de cacahuate: 2 Cdas', 'Nuez: 3 piezas', 'Ajonjolí: 4 Cdas', 'Semilla de calabaza: 4 Cdas', 'Semilla de girasol: 4 Cdas'],
    ['Avena cocida: ½ taza', 'Avena cruda: 2 Cda', 'Avena instantánea: ⅓ taza', 'Amaranto: ¼ taza', 'Arroz Integral cocido: ⅓ taza', 'Barra de avena: ½ pieza', 'Barra de granola: ½ pieza', 'Barra Special K: 1 pieza', 'Barra Stila: ¾ pieza', 'Bagel Integral: ½ pieza', 'Camote cocido: ⅓ taza', 'Cereal All Bran: ¼ taza', 'Cereal Multibran F: ¾ taza', 'Elote desgranado: ½ taza', 'Elote cocido: 1 ½ pieza', 'Granola: 3 cucharadas', 'Pasta Integral: ½ taza', 'Pan de barra Integral: 1 reb', 'Papa: ½ pieza', 'Tortilla de Maíz: 1 pieza', 'Tortilla de Nopal: 3 piezas', 'Tostadas Horneadas: 2 piezas', 'Salmas: 3 piezas', 'Palomitas s/m: 2 ½ tazas']
  ];

  public getItemsByIndex( index: number ): string[] {
    return this.items[index]
  }

}
