import { Component, OnInit } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';

@Component({
  selector: 'nutricow-edit-page',
  templateUrl: './edit-page.component.html',
  styles: ``
})
export class EditPageComponent implements OnInit {

  public emojiButton: string = '💾';
  public kcal!: number;

  constructor( private NutricowService: NutricowService ) {}

  ngOnInit() {
    this.kcal = this.NutricowService.getKcal();
    console.log(this.kcal);
  }

}
