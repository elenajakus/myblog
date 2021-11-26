import { QuizpageSelectorComponent } from './quizpage-selector.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component:  QuizpageSelectorComponent,
        data: { title: 'Quizek - My_favourites.E' },
       
    },
    {
                  path: 'quizpeldany',
                  loadChildren: () => import('./quizpeldany/quizpeldany.module').
                  then(m => m.QuizpeldanyModule),
            },
            {
                  path: 'quiz',
                  loadChildren: () => import('./quiz/quiz.module').
                  then(m => m.QuizModule),
            },
            {
                  path: 'quiz2',
                  loadChildren: () => import('./quiz2/quiz2.module').
                  then(m => m.Quiz2Module),
            },
            {
                  path: 'quiz3',
                  loadChildren: () => import('./quiz3/quiz3.module').
                  then(m => m.Quiz3Module),
            },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QuizpageSelectorRoutingModule { }
