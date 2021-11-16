import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FenntartComponent } from './fenntart.component';

const routes: Routes = [
  { path:'',
    component: FenntartComponent,
    data: {title:'Fenntarthatóság - My_favourites.E'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FenntartRoutingModule { }
