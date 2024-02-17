import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'edit',
    component: EditPageComponent
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]


@NgModule({
  imports: [ RouterModule.forChild( routes )],
  exports: [ RouterModule ]
})
export class NutricowRoutingModule { }
