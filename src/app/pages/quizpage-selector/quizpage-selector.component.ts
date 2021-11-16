import { Component } from '@angular/core';
import { QUIZPAGES } from './../../shared/database/quiz.database';

@Component({
  selector: 'app-quizpage-selector',
  templateUrl: './quizpage-selector.component.html',
  styleUrls: ['./quizpage-selector.component.scss']
})
export class QuizpageSelectorComponent {
  quizpages = QUIZPAGES;

  constructor() { }

}


