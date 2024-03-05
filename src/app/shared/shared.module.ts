import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FixedButtonComponent } from './components/fixed-button/fixed-button.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FixedButtonComponent,
    SubtitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FixedButtonComponent,
    SubtitleComponent,
  ]
})
export class SharedModule { }
