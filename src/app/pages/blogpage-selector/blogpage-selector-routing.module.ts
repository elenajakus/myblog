import { BlogpageSelectorComponent } from './blogpage-selector.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component:  BlogpageSelectorComponent,
        data: { title: 'Blogposztok - My_favourites.E' },
        
    },
    {
        path: 'penzugy',
        loadChildren: () => import('./penzugy/penzugy.module').then(m => m.PenzugyModule),
  },
  {
        path: 'konyvek',
        loadChildren: () => import('./konyvek/konyvek.module').then(m => m.KonyvekModule),
  },
  {
        path: 'fenntart',
        loadChildren: () => import('./fenntart/fenntart.module').then(m => m.FenntartModule),
 },
 {
        path: 'onismeret',
        loadChildren: () => import('./onismeret/onismeret.module').then(m => m.OnismeretModule),
 },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogpageSelectorRoutingModule { }
