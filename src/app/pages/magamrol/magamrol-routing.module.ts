import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagamrolComponent } from './magamrol.component';

const routes: Routes = [
  { path:'',
    component: MagamrolComponent,
    data: {title:'Magamról - My_favourites.E'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagamrolRoutingModule { }
