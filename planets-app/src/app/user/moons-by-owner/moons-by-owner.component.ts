import { Component, OnInit } from '@angular/core';
import { MoonId } from 'src/app/types/moon';
import { UserService } from '../user.service';

@Component({
  selector: 'app-moons-by-owner',
  templateUrl: './moons-by-owner.component.html',
  styleUrls: ['./moons-by-owner.component.css']
})
export class MoonsByOwnerComponent implements OnInit{
  moonsList: any
  thereAreNoMoons: boolean = false;

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
    if(this.userService.isLogged){
      this.userService.getMoonsByUser().subscribe({
      next:(moons) => {
        this.moonsList = moons;

        if(this.moonsList.length === 0){
          this.thereAreNoMoons = true;
          this.userService.moonsData = false
        }
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        
      },
    })
    }
    
  }
}
