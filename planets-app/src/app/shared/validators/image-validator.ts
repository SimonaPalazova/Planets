import { ValidatorFn } from "@angular/forms";

export function appImageValidator(): ValidatorFn {
 
  const regExp = new RegExp(`^https?:\/\/`);

  return (control) => {
    const x = control.value;
    const z = regExp.test(control.value);
    return control.value === "" || regExp.test(control.value)
      ? null
      : { appImageValidator: true };
  };
}