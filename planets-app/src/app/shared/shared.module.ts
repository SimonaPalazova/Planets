import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { ImageDirective } from './validators/image.directive';



@NgModule({
  declarations: [
    EmailDirective,
    ImageDirective
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
