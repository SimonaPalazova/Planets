import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { OnePlanetComponent } from './one-planet/one-planet.component';
import { CreatePlanetComponent } from './create-planet/create-planet.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';


const routes: Routes = [
  {
    path: ' ',
    children:[
      {
        path: '',
        pathMatch:'full',
        component:PlanetListComponent
      },
      {
        path: ':planetid',
        component: OnePlanetComponent
      },
      {
        path: ':planeid/edit',
        component: EditPlanetComponent
      }
    ]
  
  },
 
  {
    path: 'create/planet',
    component: CreatePlanetComponent,
    canActivate:[AuthActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
