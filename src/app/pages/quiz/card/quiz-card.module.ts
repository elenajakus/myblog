import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizCardComponent } from './quiz-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';



@NgModule({
  declarations: [QuizCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    OnHoverModule
  ],
  exports: [QuizCardComponent]
})
export class QuizCardModule { }
