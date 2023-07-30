import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from './core/core.module';
import { MoonListComponent } from './moon-list/moon-list.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { UserModule } from './user/user.module';
import { PlanetModule } from './planet/planet.module';
import { MoonModule } from './moon/moon.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    MoonListComponent,
    PlanetListComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    PlanetModule,
    MoonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
