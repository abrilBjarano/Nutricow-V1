import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NutricowRoutingModule } from './nutricow-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { CategoriesComponent } from './components/categories/categories.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    EditPageComponent,
    InfoPageComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    NutricowRoutingModule,
    SharedModule,
  ]
})
export class NutricowModule { }
