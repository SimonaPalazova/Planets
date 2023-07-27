import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMoonComponent } from './create-moon/create-moon.component';
import { OneMoonComponent } from './one-moon/one-moon.component';



@NgModule({
  declarations: [
    CreateMoonComponent,
    OneMoonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoonModule { }
