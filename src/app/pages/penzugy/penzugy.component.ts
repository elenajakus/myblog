import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-penzugy',
  templateUrl: './penzugy.component.html',
  styleUrls: ['./penzugy.component.scss']
})
export class PenzugyComponent {
  title = 'Pénzügy';
   form: FormGroup | null = null;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   initForm(): void {}

   log(): void {
     console.log(this.form?.value);
   }

}
