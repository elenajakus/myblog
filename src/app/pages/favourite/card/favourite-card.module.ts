import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteCardComponent } from './favourite-card.component';
import { BlogCardModule } from '../../blog/card/blog-card.module';



@NgModule({
  declarations: [FavouriteCardComponent],
  imports: [
    CommonModule,
    BlogCardModule
  ],
  exports: [FavouriteCardComponent]
})
export class FavouriteCardModule { }
