import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MoonId } from '../types/moon';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-moon-list',
  templateUrl: './moon-list.component.html',
  styleUrls: ['./moon-list.component.css']
})
export class MoonListComponent implements OnInit{
  moonsList: MoonId[] = [];
  thereAreNoMoons: boolean = false;

  constructor(
    private apiServies: ApiService,
    private userService: UserService
  ){}

  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiServies.getMoons().subscribe({
      next:(moons) => {
        this.moonsList = moons;

        if(this.moonsList.length === 0){
          this.thereAreNoMoons = true;
        }
      },
       error: (err) => {
       console.log(`Error: ${err}`);
       
      },
    })
  }
}
