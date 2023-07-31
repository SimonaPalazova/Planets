import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMoonComponent } from './create-moon/create-moon.component';
import { MoonRoutingModule } from './moon-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateMoonComponent,
  ],
  imports: [
    CommonModule,
    MoonRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MoonModule { }
