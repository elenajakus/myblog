import { Quiz } from './../../../shared/models/quiz.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
  @Input() quiz?: Quiz;

  constructor() { }

  ngOnInit(): void {
  }

}
