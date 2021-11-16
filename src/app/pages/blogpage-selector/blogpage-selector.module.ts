import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogpageSelectorComponent } from './blogpage-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { BlogpageSelectorRoutingModule } from './blogpage-selector-routing.module';
import { ContainerModule } from 'src/app/shared/components/container/container.module';

@NgModule({
  declarations: [ BlogpageSelectorComponent],
  imports: [
    CommonModule,
    BlogpageSelectorRoutingModule,
    MatCardModule,
    MatRippleModule,
    OnHoverModule,
    ContainerModule
  ]
})
export class BlogpageSelectorModule { }
