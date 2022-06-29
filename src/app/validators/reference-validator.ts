import { AbstractControl, ValidationErrors } from '@angular/forms';

export function referenceValidator(control: AbstractControl):  ValidationErrors | null {
 // One uppercase at least
 const referenceRegex = RegExp('^([0-9])#([0-9A-Z])+$');
 const valid = referenceRegex.test(control.value);

 const errors = {
  /*  nom de l'erreur */
   validation : {
     rules: 'Doit commencer par un chiffre'
   }
 };

 return !valid ? errors : null;

}
