import { FormGroup, FormControl, FormArray } from '@angular/forms';

export function getHumanName(): FormGroup { /*szinten visszaad egy formot*/
  return new FormGroup({
    text: new FormControl(), /*textbe beleirom a person nevet*/
    family: new FormControl(),
    given: new FormArray([])
  });
}
