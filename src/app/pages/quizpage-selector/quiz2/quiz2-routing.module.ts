import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz2Component } from './quiz2.component';

const routes: Routes = [
  { path:'',
    component: Quiz2Component,
    data: {title: 'Harry Potter varázsige kvíz - My_favourites.E' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Quiz2RoutingModule { }
