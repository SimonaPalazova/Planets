import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { appImageValidator } from 'src/app/shared/validators/image-validator';

@Component({
  selector: 'app-create-moon',
  templateUrl: './create-moon.component.html',
  styleUrls: ['./create-moon.component.css']
})
export class CreateMoonComponent {
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
  constructor(private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService) {}

  createMoon():void{
    if(this.form.invalid){
      return;
    }
    const { name, image, overview } = this.form.value;
    this.apiService.createMoon( name!, image!, overview!).subscribe(() => {
      this.router.navigate(['/moons']);
    })
  }

}


