import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FixedButtonComponent } from './components/fixed-button/fixed-button.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FixedButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FixedButtonComponent,
  ]
})
export class SharedModule { }
