
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-konyvek',
  templateUrl: './konyvek.component.html',
  styleUrls: ['./konyvek.component.scss']
})
export class KonyvekComponent {
  title = 'Könyvek';
  form: FormGroup | null = null;


  constructor(private router: Router) { }

  ngOnInit(): void {

}
}
