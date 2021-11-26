import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from 'src/app/pages/quizpage-selector/quiz/quiz.component';
import { QuizRoutingModule } from 'src/app/pages/quizpage-selector/quiz/quiz-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
  ],
   exports:[QuizComponent],
})
export class QuizModule { }
