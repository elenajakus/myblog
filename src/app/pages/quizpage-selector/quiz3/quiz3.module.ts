import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz3Component } from 'src/app/pages/quizpage-selector/quiz3/quiz3.component';
import { Quiz3RoutingModule } from 'src/app/pages/quizpage-selector/quiz3/quiz3-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [Quiz3Component],
  imports: [
    CommonModule,
    Quiz3RoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
  ],
   exports:[Quiz3Component],
})
export class Quiz3Module { }
