import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-onismeret',
  templateUrl: './onismeret.component.html',
  styleUrls: ['./onismeret.component.scss']
})
export class OnismeretComponent {
  title = 'Önismeret';
  form: FormGroup | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
