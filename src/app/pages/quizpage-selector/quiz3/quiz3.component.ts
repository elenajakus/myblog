import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz3',
  templateUrl: './quiz3.component.html',
  styleUrls: ['./quiz3.component.scss'],
})
export class Quiz3Component {
  title = 'Harry Potter tárgyai kvíz';
  buttonName = "Töltsd ki Harry Potter tárgyai kvízét. Vajon hányat tudsz? ";
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
        question: '1. Kérdés: Mit kapott Harry karácsonyra egy ismeretlen személytől?',
        option: [
          {optionid: 1, name: 'aranyat'},
          {optionid: 2, name: 'varázspálcát'},
          {optionid: 3, name: 'tükröt'},
          {optionid: 4, name: 'láthatatlanná tévő köpenyt'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 3,
        question: '3. Mit kapott Harry Dumbledore hagyatékaként?',
        option: [
          {optionid: 1, name: 'aranycikesz'},
          {optionid: 2, name: 'házimanó'},
          {optionid: 3, name: 'bodzapálca'},
          {optionid: 4, name: 'bölcsek köve'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: '3. Kérdés: Mit talált meg Harry egy tó fenekén??',
        option: [
          {optionid: 1, name: 'bodzsapálca'},
          {optionid: 2, name: 'aranycikesz'},
          {optionid: 3, name: 'Griffendél kardja'},
          {optionid: 4, name: 'feltámadás köve'}
        ],
        answer: 3,
        selected: 0
      },
      {
        id: 4,
        question: '4. Kérdés: Milyen állatot kapott Harry Hagridtól?',
        option: [
          {optionid: 1, name: 'macska'},
          {optionid: 2, name: 'patkány'},
          {optionid: 3, name: 'kutya'},
          {optionid: 4, name: 'bagoly'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 5,
        question: '5. Kérdés: Kinek a könyvével készítette el Harry a bájitalokat? ',
        option: [
          {optionid: 1, name: 'Ron Weasley'},
          {optionid: 2, name: 'Tom Denem'},
          {optionid: 3, name: 'A félvér herceg'},
          {optionid: 4, name: 'A tisztavérű király'}
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
