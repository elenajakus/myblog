import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {getPersonForm} from '../../../shared/forms/person.forms';
import {getAddressForm} from '../../../shared/forms/address.form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any ={}

  form: FormGroup | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe((user) =>
    {
      this.user =user
    })

      this.initForm();
  }

    initForm(): void {
      this.form = getPersonForm();
      const idFormArray = this.form.get('identifier') as FormArray;
      (idFormArray.get([1]) as FormGroup).controls.value.setValue(this.form.value);
    }

  log(): void {
    console.log(this.form?.value);
  }

}

