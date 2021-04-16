import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { getHumanName } from './human-name.form';

export function getPatientForm(): FormGroup {
  return new FormGroup({
    identifier: new FormArray([ /*form tomb*/
      new FormGroup({
        use: new FormControl(),
        value: new FormControl()
      })
    ]),
    gender: new FormControl(),
    name: new FormArray([
      getHumanName(),
      getHumanName()
    ]),
    birthDate: new FormControl()
  });
}

