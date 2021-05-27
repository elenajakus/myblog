import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuizListRoutingModule } from './quiz-list-routing.module';
import { QuizCardModule } from '../card/quiz-card.module';
import { QuizAddModule } from '../add/quiz-add.module';
import { QuizListComponent } from './quiz-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [QuizListComponent],
  imports: [
    CommonModule,
    QuizListRoutingModule,
    MatToolbarModule,
    ContainerModule,
    QuizCardModule,
    MatButtonModule,
    MatIconModule,
    QuizAddModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class QuizListModule { }
