import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, /* atiranyitasra szolgal, pathmatch full-teljesen meg kell egyezzen a routing */
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user/pofile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: []
  },
  {
    path: 'blogpages',
    loadChildren: () => import('./pages/blogpages/blogpages.module').then(m => m.BlogpagesModule),
    canActivate: []
  },
  {
    path: 'quizpages',
    loadChildren: () => import('./pages/quizpages/quizpages.module').then(m => m.QuizpagesModule),
    canActivate: []
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
