import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlanetComponent } from './create-planet/create-planet.component';
import { OnePlanetComponent } from './one-planet/one-planet.component';



@NgModule({
  declarations: [
    CreatePlanetComponent,
    OnePlanetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanetModule { }
