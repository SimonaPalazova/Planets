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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    MoonListComponent,
    PlanetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
