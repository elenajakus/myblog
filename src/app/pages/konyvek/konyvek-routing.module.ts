import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KonyvekComponent } from './konyvek.component';

const routes: Routes = [
  { path:'',
    component: KonyvekComponent,
    data: {title:'Könyvek - My_favourites.E'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KonyvekRoutingModule { }
