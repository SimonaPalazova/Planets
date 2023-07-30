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
    const { apiUrl } = environment;
    return this.http.get<UserId>(`${apiUrl}/users/${id}/profile`);
  }

  getPlanets(){
    const { apiUrl } = environment;
    return this.http.get<PlanetId[]>(`${apiUrl}/planets`)
  }

  getOnePlanet(id: string){
    const { apiUrl } = environment;
    return this.http.get<PlanetId>(`${apiUrl}/planets/${id}`)
  }

  getPlanetByOwner(id: string){
    const { apiUrl } = environment;
    return this.http.get<PlanetId[]>(`${apiUrl}/planets/${id}/planets`)
  }

  getMoons(){
    const { apiUrl } = environment;
    return this.http.get<MoonId[]>(`${apiUrl}/moons`)
  }
  getOneMoon(id: string){
    const { apiUrl } = environment;
    return this.http.get<MoonId>(`${apiUrl}/moons/${id}`)
  }
  getMoonsByOwner(id: string){
    const { apiUrl } = environment;
    return this.http.get<MoonId[]>(`${apiUrl}/moons/${id}/moons`)
  }
}
