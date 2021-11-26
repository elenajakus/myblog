import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizpeldanyComponent } from './quizpeldany.component';

const routes: Routes = [
  { path:'',
    component: QuizpeldanyComponent,
    data: {title: 'Harry Potter 1. quiz - My_favourites.E' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizpeldanyRoutingModule { }
