import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: 'error', component: ErrorComponent },

 // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
