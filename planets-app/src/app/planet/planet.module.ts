import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlanetComponent } from './create-planet/create-planet.component';
import { OnePlanetComponent } from './one-planet/one-planet.component';
import { PlanetRoutingModule } from './planet-routing.module';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';



@NgModule({
  declarations: [
    CreatePlanetComponent,
    OnePlanetComponent,
    EditPlanetComponent
  ],
  imports: [
    CommonModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
