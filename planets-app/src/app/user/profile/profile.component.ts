import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { UserService } from '../user.service';

interface Profile{
  _id: string | undefined;
  username: string | undefined;
  email: string | undefined;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  validData:boolean =true;

  user: Profile = {
    _id: this.userService.user?._id,
    username: this.userService.user?._id,
    email: this.userService.user?._id
  };
  id: string = '';
  constructor(
    private userService: UserService
  ){}

  ngOnInit():void{
    this.userService
    .getUrser()
    .subscribe((user) =>{
      this.user = user;
    })
    if(this.userService.planetsData === false && this.userService.moonsData === false){
      this.validData = false;
    }
  }
}
