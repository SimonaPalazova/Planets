import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl,  NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms"
import { appImageValidator } from './image-validator';

@Directive({
  selector: '[appImage]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting:  ImageDirective,
      multi: true,
    },
  ],
})
export class ImageDirective implements Validator, OnChanges{

  @Input() appImage: string[] = [];

  validator: ValidatorFn = () => null
  constructor() { }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentChange = changes["appImage"];
    if(currentChange){
      this.validator = appImageValidator()
    }
  }
}
