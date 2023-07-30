import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from "src/app/shared/constants";
import { appEmailValidator } from "src/app/shared/validators/email-validator";
import { matchPasswordsValidator } from "src/app/shared/validators/match-password-validator";
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: [
      "",
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    passGroup: this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(5)]],
        rePassword: ["", [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator("password", "rePassword")],
      }
    ),
  });
  constructor(
    private fb: FormBuilder,  
    private router: Router, 
    private userService: UserService
    ){}

  register(): void {
    if (this.form.invalid) {
      return;
    }
    const { username, email, passGroup:{password, rePassword} = {} } = this.form.value
    console.log(this.form.value);
    this.userService.register(username!, email!, password!, rePassword!).subscribe(()=>{
      this.router.navigate(['/users/profile'])
      console.log(this.form.value);
    })
    
  }
}

