import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizpagesComponent } from './quizpages.component';

const routes: Routes = [
  { path: '', redirectTo: 'quizpage-selector', pathMatch: 'full' },
  {
        path:'',
        component: QuizpagesComponent,
        children: [
            {
                  path: 'quizpage-selector',
                  loadChildren: () => import('./../quizpage-selector/quizpage-selector.module').
                  then(m => m.QuizpageSelectorModule),
            },
            {
                  path: 'quizpeldany',
                  loadChildren: () => import('src/app/pages/quizpeldany/quizpeldany.module').
                  then(m => m.QuizpeldanyModule),
            },
            {
                  path: 'quiz',
                  loadChildren: () => import('src/app/pages/quiz/quiz.module').
                  then(m => m.QuizModule),
            },
            {
                  path: 'quiz2',
                  loadChildren: () => import('src/app/pages/quiz2/quiz2.module').
                  then(m => m.Quiz2Module),
            },
            {
                  path: 'quiz3',
                  loadChildren: () => import('src/app/pages/quiz3/quiz3.module').
                  then(m => m.Quiz3Module),
            },
        ],
     canActivateChild: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class QuizpagesRoutingModule { }
