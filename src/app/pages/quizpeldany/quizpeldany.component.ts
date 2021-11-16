import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-quizpeldany',
  templateUrl: './quizpeldany.component.html',
  styleUrls: ['./quizpeldany.component.scss']
})
export class QuizpeldanyComponent {
title = 'Mennyit tudsz Harry Potterről?';
  buttonName = "Töltsd ki Harry Potterről ezt a kvízt. Vajon hányat tudsz? ";
  begin = false;
  complete = false;
  questions: any;
  currentQuestion: any;
  currentIndex: number;
  score: any;
  noAnswer: any;
  feedback: any;

  constructor(private router: Router){
    this.questions = [
      {
        id: 1,
        question: '1. Kérdés: Ki volt Harry anyja?',
        option: [
          {optionid: 1, name: 'Narcissa'},
          {optionid: 2, name: 'Hermione'},
          {optionid: 3, name: 'McGalagony professzor'},
          {optionid: 4, name: 'Lily'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 2,
        question: '2. Kérdés: Ki volt Harry keresztapja?',
        option: [
          {optionid: 1, name: 'Albus Dumbledore'},
          {optionid: 2, name: 'Ron Weasley'},
          {optionid: 3, name: 'Sirius Black'},
          {optionid: 4, name: 'Arthur Weasley'}
        ],
        answer: 3,
        selected: 0
      },
      {
        id: 3,
        question: '3. Kérdés: Ki volt Harry szerelme?',
        option: [
          {optionid: 1, name: 'Luna'},
          {optionid: 2, name: 'Hermione'},
          {optionid: 3, name: 'Minerva'},
          {optionid: 4, name: 'Ginny'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 4,
        question: '4. Kérdés: Hány évesen tudta meg Harry, hogy varázsló?',
        option: [
          {optionid: 1, name: '11'},
          {optionid: 2, name: '12'},
          {optionid: 3, name: '9'},
          {optionid: 4, name: '13'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 5,
        question: '5. Kérdés: Ki volt Harry legnagyobb ellensége?',
        option: [
          {optionid: 1, name: 'Perselus Piton'},
          {optionid: 2, name: 'Lucius Malfoy'},
          {optionid: 3, name: 'Voldemort'},
          {optionid: 4, name: 'Draco Malfoy'}
        ],
        answer: 3,
        selected: 0
      }
    ];

    this.currentIndex = 0;
    this.currentQuestion = this.questions[this.currentIndex];
   }

   next(){
     this.currentIndex++;
     this.currentQuestion = this.questions[this.currentIndex];
   }

   submit(){
     this.buttonName = "Újra játszod?";

     if (this.currentIndex + 1 == this.questions.length){
       this.complete = true;
       this.begin = false;
       this.score = 0;
       this.noAnswer = 0;
       this.questions.map(val => {
         if (val.selected != 0){
           if (val.selected == val.answer) {
             this.score++;
           }
         }
         else {
           this.noAnswer++;
         }
         val.selected = 0;
       });
     }
  }

   start(){
     this.complete = false;
     this.currentIndex = 0;
     this.currentQuestion = this.questions[this.currentIndex];
     this.begin = true;
   }

     ngOnInit(): void {
     }

 }

