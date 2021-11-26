import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  title = 'Harry Potter varázsige kvíz';
  buttonName = "Töltsd ki Harry Potter varázsige kvízét. Vajon hányat tudsz? ";
  begin = false;
  complete = false;
  questions: any;
  currentQuestion: any;
  currentIndex: number;
  score: any;
  noAnswer: any;

  constructor(private router: Router){
    this.questions = [
      {
        id: 1,
        question: '1. Kérdés: Avacada kedavra',
        option: [
          {optionid: 1, name: 'védővarázs'},
          {optionid: 2, name: 'begyűjtő bűbáj'},
          {optionid: 3, name: 'gyilkos átok'},
          {optionid: 4, name: 'tárgyakat mozgató bűbáj'}
        ],
        answer: 3,
        selected: 0
      },
      {
        id: 2,
        question: '2. Kérdés: Reducto',
        option: [
          {optionid: 1, name: 'taroló átok'},
          {optionid: 2, name: 'gyilkos átok'},
          {optionid: 3, name: 'elrejtő bűbáj'},
          {optionid: 4, name: 'átváltoztató bűbáj'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: '3. Kérdés: Crucio',
        option: [
          {optionid: 1, name: 'gyilkos átok'},
          {optionid: 2, name: 'védelmi bűbáj'},
          {optionid: 3, name: 'mozgató bűbáj'},
          {optionid: 4, name: 'fájdalomkeltő bűbáj'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 4,
        question: '4. Kérdés: Imperio',
        option: [
          {optionid: 1, name: 'irányító bűbáj'},
          {optionid: 2, name: 'altató bűbáj'},
          {optionid: 3, name: 'átváltoztató bűbáj'},
          {optionid: 4, name: 'felejtésátok'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 5,
        question: '5. Kérdés: Expecto patronum',
        option: [
          {optionid: 1, name: 'rontás'},
          {optionid: 2, name: 'patrónus bűbáj'},
          {optionid: 3, name: 'átváltoztató bűbáj'},
          {optionid: 4, name: 'védelmi bűbáj'}
        ],
        answer: 2,
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
