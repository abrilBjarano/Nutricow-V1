import { Component, OnInit, ViewChild } from '@angular/core';
import { NutricowService } from '../../services/nutricow.service';
import { InputEditComponent } from '../../components/input-edit/input-edit.component';

@Component({
  selector: 'nutricow-edit-page',
  templateUrl: './edit-page.component.html',
  styles: ``
})
export class EditPageComponent implements OnInit {

  public subtitle: string = 'Ajusta tus cantidades y KCals aquí 👇';

  public emojiButton: string = '💾';
  public kcal!: number;
  public upL_L!: number;
  public upL_F!: number;
  public upL_V!: number;
  public upL_Leg!: number;
  public upL_C!: number;
  public upL_GS!: number;
  public upL_GC!: number;
  public upL_Cer!: number;
  public upL_A!: number;

  @ViewChild(InputEditComponent) inputEditComponent!: InputEditComponent;

  constructor( private nutricowService: NutricowService ) {}

  ngOnInit() {
    this.kcal = this.nutricowService.getKcal();
    this.upL_L = this.nutricowService.getUpperLimitByEmoji('🥛');
    this.upL_F = this.nutricowService.getUpperLimitByEmoji('🍇');
    this.upL_V = this.nutricowService.getUpperLimitByEmoji('🥦');
    this.upL_Leg = this.nutricowService.getUpperLimitByEmoji('🌱');
    this.upL_C = this.nutricowService.getUpperLimitByEmoji('🥩');
    this.upL_GS = this.nutricowService.getUpperLimitByEmoji('🥑');
    this.upL_GC = this.nutricowService.getUpperLimitByEmoji('🥜');
    this.upL_Cer = this.nutricowService.getUpperLimitByEmoji('🎑');
    this.upL_A = this.nutricowService.getUpperLimitByEmoji('🚰');
  }
  setNewValuesFromInput(){

    const newKcal = this.inputEditComponent.kcal;
    this.nutricowService.setKCal(newKcal);

    const newLac = this.inputEditComponent.upL_L;
    this.nutricowService.setUpperLimitForCategory('🥛', newLac);

    const newFrut = this.inputEditComponent.upL_F;
    this.nutricowService.setUpperLimitForCategory('🍇', newFrut);

    const newVer = this.inputEditComponent.upL_V;
    this.nutricowService.setUpperLimitForCategory('🥦', newVer);

    const newLeg = this.inputEditComponent.upL_Leg;
    this.nutricowService.setUpperLimitForCategory('🌱', newLeg);

    const newC = this.inputEditComponent.upL_Leg;
    this.nutricowService.setUpperLimitForCategory('🥩', newC);

    const newGS = this.inputEditComponent.upL_GS;
    this.nutricowService.setUpperLimitForCategory('🥑', newGS);

    const newGC = this.inputEditComponent.upL_GC;
    this.nutricowService.setUpperLimitForCategory('🥜', newGC);

    const newCer = this.inputEditComponent.upL_Cer;
    this.nutricowService.setUpperLimitForCategory('🎑', newCer);

    const newA = this.inputEditComponent.upL_A;
    this.nutricowService.setUpperLimitForCategory('🚰', newA);

  }

}
