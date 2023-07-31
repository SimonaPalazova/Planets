import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { appImageValidator } from 'src/app/shared/validators/image-validator';

@Component({
  selector: 'app-create-planet',
  templateUrl: './create-planet.component.html',
  styleUrls: ['./create-planet.component.css']
})


export class CreatePlanetComponent {
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
  constructor(private fb: FormBuilder,  
    private router: Router,
    private apiService: ApiService) {}

  createPlanet():void{
    if(this.form.invalid){
      return;
    }
    const { name, image, planetType, overview } = this.form.value;
    this.apiService.createPlanet( name!, image!, planetType!, overview!).subscribe(() => {
      this.router.navigate(['/planets']);
    })
    
    
  }
}
