import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnismeretComponent } from './onismeret.component';

const routes: Routes = [
  { path:'',
    component: OnismeretComponent,
    data: {title: 'Önismeret - My_favourites.E' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnismeretRoutingModule { }
