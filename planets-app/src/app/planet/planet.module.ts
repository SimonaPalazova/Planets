import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlanetComponent } from './create-planet/create-planet.component';;
import { PlanetRoutingModule } from './planet-routing.module';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreatePlanetComponent,

    EditPlanetComponent
  ],
  imports: [
    CommonModule,
    PlanetRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PlanetModule { }
