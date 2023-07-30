import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanetId } from './types/planet';
import { MoonId } from './types/moon';
import { UserId } from './types/user-id';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUrser(id: string){
    const { appUrl } = environment;
    return this.http.get<UserId>(`${appUrl}/users/${id}/profile`);
  }

  getPlanets(){
    const { appUrl } = environment;
    return this.http.get<PlanetId[]>(`${appUrl}/planets`)
  }

  getOnePlanet(id: string){
    const { appUrl } = environment;
    return this.http.get<PlanetId>(`${appUrl}/planets/${id}`)
  }

  getPlanetByOwner(id: string){
    const { appUrl } = environment;
    return this.http.get<PlanetId[]>(`${appUrl}/planets/${id}/planets`)
  }

  getMoons(){
    const { appUrl } = environment;
    return this.http.get<MoonId[]>(`${appUrl}/moons`)
  }
  getOneMoon(id: string){
    const { appUrl } = environment;
    return this.http.get<MoonId>(`${appUrl}/moons/${id}`)
  }
  getMoonsByOwner(id: string){
    const { appUrl } = environment;
    return this.http.get<MoonId[]>(`${appUrl}/moons/${id}/moons`)
  }
}
