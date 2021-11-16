import { QuizpageSelectorComponent } from './quizpage-selector.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component:  QuizpageSelectorComponent,
        data: { title: 'Quizek - My_favourites.E' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QuizpageSelectorRoutingModule { }
