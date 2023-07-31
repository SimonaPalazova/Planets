import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from "src/app/shared/constants";
import { appEmailValidator } from "src/app/shared/validators/email-validator";
import { UserService } from '../user.service';
import { ApiService } from 'src/app/api.service';

interface Profile {
  username: string;
  email: string;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit{
  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: [
      "",
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    
  });

  profileDetails: Profile = {
    username: "",
    email: ""
  }

  constructor(private fb: FormBuilder,  
    private router: Router,
    private userService: UserService,
    private apiService: ApiService) {}

  ngOnInit(): void {
    const {username, email} = this.userService.user!
    this.profileDetails ={
      username,
      email
    };

    this.form.setValue({
      username,
      email
    });

  }
  editProfile(): void {
    if (this.form.invalid) {
      return;
    }
    const {username, email} = this.form.value;
    
    this.userService.updateUser(username!, email!).subscribe(() => {
      this.router.navigate(['/users/profile']);
    })
    
    
  }
}
