import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from "src/app/shared/constants";
import { appEmailValidator } from "src/app/shared/validators/email-validator";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: [
      "",
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    
  });
  constructor(private fb: FormBuilder,  private router: Router) {}
  
  editProfile(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.router.navigate(['/users/profile'])
  }
}
