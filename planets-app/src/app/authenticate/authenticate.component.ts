import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  isAuthenticating = true;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.userService.getUrser().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
        this.router.navigate(['/'])
      },
      complete: () => {
        this.isAuthenticating = false;
      },
    });
  }
}
