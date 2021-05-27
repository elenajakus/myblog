import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../../shared/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
             },
            {
                path: 'blogpages',
                loadChildren: () => import('./../blog/list/blog-list.module').then(m => m.BlogListModule),
            },
            {
                path: 'quizes',
                loadChildren: () => import('./../quiz/list/quiz-list.module').then(m => m.QuizListModule),
            }
        ],
      canActivateChild: [AuthGuard] // igy levedem az egeszet
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
