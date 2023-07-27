import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { OnePlanetComponent } from './one-planet/one-planet.component';
import { CreatePlanetComponent } from './create-planet/create-planet.component';


const routes: Routes = [
  {
    path: 'planets',
    component: PlanetListComponent,
  },
  {
    path: 'planets/:planetid',
    component: OnePlanetComponent
  },
  {
    path: 'create/planet',
    component: CreatePlanetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
