import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpagesComponent } from './blogpages.component';
import { BlogpagesRoutingModule } from './blogpages-routing.module';
import { NavModule } from '../nav/nav.module';


@NgModule({
  declarations: [BlogpagesComponent],
  imports: [
        CommonModule,
        BlogpagesRoutingModule,
        NavModule
  ],
   exports: [BlogpagesComponent]
})
export class BlogpagesModule { }
