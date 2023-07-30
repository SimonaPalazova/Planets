import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { appImageValidator } from 'src/app/shared/validators/image-validator';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent {
  form = this.fb.group({
    name:["", [Validators.required]],
    image:[
      "",
      [Validators.required, appImageValidator()],
    ],
    planetType:["", [Validators.required]],
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

  editPlanet():void{
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);
    this.router.navigate(['/planets'])
    
  }

}
