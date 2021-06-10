import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegService} from '../../../reg.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });
  error = false; /* nincs hiba elsonek */

  constructor(public dialogRef: MatDialogRef<RegistrationComponent>) {
    // this.dialogRef
  }

  ngOnInit(): void {
  }

}

