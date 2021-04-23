import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {getPersonForm} from '../../../shared/forms/person.forms';
import {getAddressForm} from '../../../shared/forms/address.form';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup | null = null;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getPersonForm();
    const idFormArray = this.form.get('identifier') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls.value.setValue('valaki@gmail.com');
  }

  get getAddress(): FormArray {
    return this.form?.get('address') as FormArray;
  }

  addAddress(): void {
    const idFormArray = this.form?.get('address') as FormArray;
    idFormArray.push(getAddressForm());
  }

  removeAddress(index: number): void {
    const formArray = this.form?.get('address') as FormArray;
    formArray.removeAt(index);
  }

  log(): void {
    console.log(this.form?.value);
  }

}

