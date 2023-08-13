import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoonListComponent } from '../moon-list/moon-list.component';
import { CreateMoonComponent } from './create-moon/create-moon.component';
import { AuthActivate } from '../core/guards/auth.activate';



const routes: Routes = [
  {
    path: 'moons',
    children:[
      {
        path: '',
        pathMatch:'full',
        component: MoonListComponent,
        canActivate: [AuthActivate]

      },
    ]
   
  },
  {
    path: 'create/moon',
    component: CreateMoonComponent,
    canActivate: [AuthActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoonRoutingModule { }