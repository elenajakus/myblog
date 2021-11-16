import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpagesComponent } from './blogpages.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogpage-selector', pathMatch: 'full' },
  {
        path:'',
        component: BlogpagesComponent,
        children: [
            {
                  path: 'blogpage-selector',
                  loadChildren: () => import('./../blogpage-selector/blogpage-selector.module').
                  then(m => m.BlogpageSelectorModule),
            },
            {
                  path: 'penzugy',
                  loadChildren: () => import('./../penzugy/penzugy.module').then(m => m.PenzugyModule),
            },
            {
                  path: 'konyvek',
                  loadChildren: () => import('./../konyvek/konyvek.module').then(m => m.KonyvekModule),
            },
            {
                  path: 'fenntart',
                  loadChildren: () => import('./../fenntart/fenntart.module').then(m => m.FenntartModule),
           },
           {
                  path: 'onismeret',
                  loadChildren: () => import('./../onismeret/onismeret.module').then(m => m.OnismeretModule),
           },
        ],
     canActivateChild: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpagesRoutingModule { }
