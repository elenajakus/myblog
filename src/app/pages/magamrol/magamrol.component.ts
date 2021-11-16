import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-magamrol',
  templateUrl: './magamrol.component.html',
  styleUrls: ['./magamrol.component.scss']
})
export class MagamrolComponent {
  title = 'Magamról';
  form: FormGroup | null = null;

  constructor(private router: Router) { }

   ngOnInit(): void {
   }

   initForm(): void {}

   log(): void {
     console.log(this.form?.value);
   }

}
