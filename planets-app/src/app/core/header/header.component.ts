import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userServies: UserService, private router: Router){

  }
  get isLoggedIn():boolean{
    return this.userServies.isLogged;
  }
  get username():string{
    return this.userServies.user?.username || "";
  }  

  logout():void{
    this.userServies.logout().subscribe({
     next: () =>{
      this.router.navigate(['/'])
     },
     error: () => {
      this.router.navigate(['/'])
     }
     
    });
  }
}
