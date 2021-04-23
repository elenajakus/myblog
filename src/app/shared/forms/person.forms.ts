import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getContactPoint } from './contact-point.form';
import { getHumanName } from './human-name.form';
import { getIdentifierForm } from './identifier.form';

export function getPersonForm(): FormGroup {
  return new FormGroup({
    address: new FormArray([]), /*vegtelen sok addresst tud majd megadni a felhasznalo, a 0. indexen lesz az elso elem*/
    active: new FormControl(), /*statusz*/
    birthDate: new FormControl(), /*datum*/
    gender: new FormControl('Egyéb'),

    id: new FormControl(), /*a dokumentum id-ját itt tarolom*/
    identifier: new FormArray([
      getIdentifierForm('uid'), /*firebases user regisztracioval kotom ossze*/
      getIdentifierForm('email'), /*egyedi email cim, nem ugyanaz, mint a telecomba megadott,
       ez az az email, amivel a user regisztralt az oldalra*/
    ]),

    name: new FormArray([
      getHumanName(),
      getHumanName() /*aktualis*/
    ]),
    telecom: new FormArray([
      getContactPoint('email'),
      getContactPoint('phone'),
    ])
  });
}
