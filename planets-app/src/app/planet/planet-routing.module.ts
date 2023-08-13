import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { CreatePlanetComponent } from './create-planet/create-planet.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';


const routes: Routes = [
  {
    path: 'planets',
    children:[
      {
        path: '',
        pathMatch:'full',
        component:PlanetListComponent,
        canActivate: [AuthActivate]
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
