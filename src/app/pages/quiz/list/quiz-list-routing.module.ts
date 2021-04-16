import { QuizListComponent } from './quiz-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: QuizListComponent,
        data: { title: 'Quizek - My_favourites.e' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QuizListRoutingModule { }
