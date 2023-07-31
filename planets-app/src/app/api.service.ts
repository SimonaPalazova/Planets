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
  

  createPlanet(
    name: string,
    image: string,
    planetType: string,
    overview: string
  ){
    return this.http.post('/api/create/planet', { name, image, planetType, overview})
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

  createMoon(
    name: string,
    image: string,
    overview: string
  ){
    return this.http.post('/api/create/moon', { name, image, overview})
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
