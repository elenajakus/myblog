import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.scss'],
})
export class Quiz2Component {
  title = 'Harry Potter ellenségei kvíz';
  buttonName = "Töltsd ki Harry Potter ellenségei kvízét. Vajon hányat tudsz? ";
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
        question: '1. Kérdés: Ki álcázta magát Ron patkányaként?',
        option: [
          {optionid: 1, name: 'Draco Malfoy'},
          {optionid: 2, name: 'Lucius Malfoy'},
          {optionid: 3, name: 'Remus Lupin'},
          {optionid: 4, name: 'Peter Pettigrew'}
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 2,
        question: '2. Ki ölte meg Harry keresztapját, Sirius Blacket?',
        option: [
          {optionid: 1, name: 'Bellatrix Lestrange'},
          {optionid: 2, name: 'Dolores Umbridge'},
          {optionid: 3, name: 'Fleur Delacour'},
          {optionid: 4, name: 'Narcissa Malfoy'}
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 3,
        question: '3. Kérdés: Ki volt Harry unokatestvére, akivel utálták egymást?',
        option: [
          {optionid: 1, name: 'Oliver Wood'},
          {optionid: 2, name: 'Dudley Dursley'},
          {optionid: 3, name: 'Argus Frics'},
          {optionid: 4, name: 'Rubeus Hagrid'}
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 4,
        question: '4. Kérdés: Ki volt Harry évfolyamtársa, akivel ellenségek?',
        option: [
          {optionid: 1, name: 'Seamus Finnigan'},
          {optionid: 2, name: 'Neville Longbottom'},
          {optionid: 3, name: 'Draco Malfoy'},
          {optionid: 4, name: 'Ron Weasley'}
        ],
        answer: 3,
        selected: 0
      },
      {
        id: 5,
        question: '5. Kérdés: Ki volt az a Roxforti igazgató, akit utált Harry?',
        option: [
          {optionid: 1, name: 'Bellatrix Lestrange'},
          {optionid: 2, name: 'Dolores Umbridge'},
          {optionid: 3, name: 'McGalagony professzor'},
          {optionid: 4, name: 'Lavender Brown'}
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
