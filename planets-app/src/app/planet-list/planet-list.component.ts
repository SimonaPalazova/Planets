import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PlanetId } from '../types/planet';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planetsList: PlanetId[] = [];
  thereAreNoPlanets: boolean = false;

  constructor(
    private apiServies: ApiService,
    private userService: UserService
  ){}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void{
    this.apiServies.getPlanets().subscribe({
      next:(planets) => {
        this.planetsList = planets;

        if(this.planetsList.length === 0){
          this.thereAreNoPlanets = true;
        }
      },
      error: (err) => {
       console.log(`Error: ${err}`);
       
      },
    });
  }
}
