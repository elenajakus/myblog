import { PostsModule } from './../posts/posts.module';

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
                path: 'quizpage-selector',
                loadChildren: () => import('../quizpage-selector/quizpage-selector.module').
                then(m => m.QuizpageSelectorModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'blogpage-selector',
                loadChildren: () => import('../blogpage-selector/blogpage-selector.module').
                then(m => m.BlogpageSelectorModule),
            },
            {
                path: 'posts',
                loadChildren: () => import('../posts/posts.module').
                then(m => m.PostsModule),
                canActivate: [AuthGuard]
            },
          
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
