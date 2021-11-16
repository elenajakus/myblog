import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz2Component } from 'src/app/pages/quiz2/quiz2.component';
import { Quiz2RoutingModule } from 'src/app/pages/quiz2/quiz2-routing.module';
import { NavModule } from '../nav/nav.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContainerModule } from './../../shared/components/container/container.module';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [Quiz2Component],
  imports: [
    CommonModule,
    NavModule,
    Quiz2RoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
  ],
   exports:[Quiz2Component],
})
export class Quiz2Module { }
