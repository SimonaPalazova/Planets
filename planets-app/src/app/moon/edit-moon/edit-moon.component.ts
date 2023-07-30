import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { appImageValidator } from 'src/app/shared/validators/image-validator';

@Component({
  selector: 'app-edit-moon',
  templateUrl: './edit-moon.component.html',
  styleUrls: ['./edit-moon.component.css']
})
export class EditMoonComponent {
  form = this.fb.group({
    name:["", [Validators.required]],
    image:[
      "",
      [Validators.required, appImageValidator()],
    ],
    
    overview:[
      "", 
      [
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(50)
      ],
  ]
  })
  constructor(private fb: FormBuilder,  private router: Router) {}

  editMoon():void{
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);
    this.router.navigate(['/moons'])
    
  }

}
