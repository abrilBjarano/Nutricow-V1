import { Component, OnInit } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'nutricow-kcal',
  templateUrl: './kcal.component.html',
  styles: ``
})
export class KcalComponent implements OnInit {

  constructor( private nutricowService: NutricowService ) {}

  ngOnInit(): void {
    this.getKcal();
  }

  getKcal(): number {
    return this.nutricowService.getKcal();
  }

}
