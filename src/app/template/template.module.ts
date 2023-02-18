import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidbarComponent } from './sidbar/sidbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidbarComponent
  ]
})
export class TemplateModule { }
