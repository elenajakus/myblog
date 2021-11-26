import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenzugyComponent } from './penzugy.component';

const routes: Routes = [
    { path:'',
      component: PenzugyComponent,
      data: {title:'Pénzügy - My_favourites.E'}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenzugyRoutingModule { }
