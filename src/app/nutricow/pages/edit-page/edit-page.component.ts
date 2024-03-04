import { Component, OnInit, ViewChild } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';
import { InputEditComponent } from '../../components/input-edit/input-edit.component';

@Component({
  selector: 'nutricow-edit-page',
  templateUrl: './edit-page.component.html',
  styles: ``
})
export class EditPageComponent implements OnInit {

  public emojiButton: string = '💾';
  public kcal!: number;

  @ViewChild(InputEditComponent) inputEditComponent!: InputEditComponent;

  constructor( private NutricowService: NutricowService ) {}

  ngOnInit() {
    this.kcal = this.NutricowService.getKcal();
  }
  setKCalFromInput(){
    const newKcal = this.inputEditComponent.kcal;
    this.NutricowService.setKCal(newKcal);
  }

}
