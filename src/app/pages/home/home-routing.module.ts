import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').
                then(m => m.SplashScreenModule),
             },
            {
                path: 'magamrol',
                loadChildren: () => import('./../magamrol/magamrol.module').
                then(m => m.MagamrolModule),
            },
            {
                path: 'quizpages',
                loadChildren: () => import('./../quizpages/quizpages.module').
                then(m => m.QuizpagesModule),
            },
            {
                path: 'blogpages',
                loadChildren: () => import('./../blogpages/blogpages.module').
                then(m => m.BlogpagesModule),
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
