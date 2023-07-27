import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMoonComponent } from './create-moon/create-moon.component';
import { OneMoonComponent } from './one-moon/one-moon.component';
import { MoonRoutingModule } from './moon-routing.module';



@NgModule({
  declarations: [
    CreateMoonComponent,
    OneMoonComponent
  ],
  imports: [
    CommonModule,
    MoonRoutingModule
  ]
})
export class MoonModule { }
