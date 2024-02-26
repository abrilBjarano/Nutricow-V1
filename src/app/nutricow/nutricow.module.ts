import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NutricowRoutingModule } from './nutricow-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { SubsButtonComponent } from './components/subs-button/subs-button.component';
import { InputEditComponent } from './components/input-edit/input-edit.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    EditPageComponent,
    InfoPageComponent,
    CategoriesComponent,
    AddButtonComponent,
    SubsButtonComponent,
    InputEditComponent,
  ],
  imports: [
    CommonModule,
    NutricowRoutingModule,
    SharedModule,
  ]
})
export class NutricowModule { }
