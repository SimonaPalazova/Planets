import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { ImageDirective } from './validators/image.directive';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    EmailDirective,
    ImageDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmailDirective,
    ImageDirective
  ]
})
export class SharedModule { }
