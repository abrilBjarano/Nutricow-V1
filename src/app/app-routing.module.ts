import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nutricow',
    loadChildren: () => import('./nutricow/nutricow-routing.module').then( m => m.NutricowRoutingModule )

  },
  {
    path:'**',
    redirectTo: 'nutricow'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
