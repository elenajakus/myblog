import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getContactPoint } from './contact-point.form';
import { getHumanName } from './human-name.form';
import { getIdentifierForm } from './identifier.form';

export function getPersonForm(): FormGroup {
  return new FormGroup({

    id: new FormControl(), /*a dokumentum id-ját itt tarolom*/
    identifier: new FormArray([
      getIdentifierForm('email'), /*ez az az email, amivel a user regisztralt az oldalra*/
    ]),
  });
}
