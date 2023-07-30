import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'users/login',
    component: LoginComponent,
  },
  {
    path: 'users/register',
    component: RegisterComponent,
  },
  {
    path: 'users/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'users/profile/edit',
    component: EditProfileComponent,
    canActivate: [AuthActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
