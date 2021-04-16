import { ContainerModule } from './../../../shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BlogListRoutingModule } from './blog-list.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list.component';
import { BlogCardModule } from '../card/blog-card.module';

@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    BlogListRoutingModule,
    MatToolbarModule,
    ContainerModule,
    BlogCardModule
  ]
})
export class BlogListModule { }
