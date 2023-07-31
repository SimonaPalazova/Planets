import { Component, OnInit } from '@angular/core';
import { PlanetId } from 'src/app/types/planet';
import { UserService } from '../user.service';

@Component({
  selector: 'app-planets-by-owner',
  templateUrl: './planets-by-owner.component.html',
  styleUrls: ['./planets-by-owner.component.css']
})
export class PlanetsByOwnerComponent implements OnInit{
planetsList: any
thereAreNoPlanets: boolean = false;

constructor(
  private userService: UserService
){}

ngOnInit(): void {
  if(this.userService.isLogged){
     this.userService.getPlanetsByUser().subscribe({
      next:(planets) => {
        this.planetsList = planets;

        if(this.planetsList.length === 0){
          this.thereAreNoPlanets = true;
          this.userService. planetsData = false
        }
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        
      },
    })
  }
}
}
