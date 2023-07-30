import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { PlanetsByOwnerComponent } from './planets-by-owner/planets-by-owner.component';
import { MoonsByOwnerComponent } from './moons-by-owner/moons-by-owner.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PlanetsByOwnerComponent,
    MoonsByOwnerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
