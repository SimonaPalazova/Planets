import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoonListComponent } from '../moon-list/moon-list.component';
import { OneMoonComponent } from './one-moon/one-moon.component';
import { CreateMoonComponent } from './create-moon/create-moon.component';



const routes: Routes = [
  {
    path: 'moons',
    children:[
      {
        path: '',
        pathMatch:'full',
        component: MoonListComponent
      },
      {
        path: ':moonid',
        component: OneMoonComponent 
      }
    ]
   
  },
  {
    path: 'create/moon',
    component: CreateMoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoonRoutingModule { }