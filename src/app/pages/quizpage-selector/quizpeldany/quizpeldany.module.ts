import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizpeldanyComponent } from './quizpeldany.component';
import { QuizpeldanyRoutingModule } from './quizpeldany-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuizpeldanyComponent],
  imports: [
    CommonModule,
    QuizpeldanyRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    FormsModule,
    
  ],
  exports:[QuizpeldanyComponent],
})
export class QuizpeldanyModule { }
