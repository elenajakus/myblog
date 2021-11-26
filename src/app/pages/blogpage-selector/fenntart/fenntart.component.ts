import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-fenntart',
  templateUrl: './fenntart.component.html',
  styleUrls: ['./fenntart.component.scss']
})
export class FenntartComponent {
  title = 'Fenntarthatóság';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
