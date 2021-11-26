import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KonyvekComponent } from './konyvek.component';
import { KonyvekRoutingModule } from './konyvek-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { MatListModule } from '@angular/material/list';
import { NavModule } from 'src/app/pages/nav/nav.module';


@NgModule({
  declarations: [KonyvekComponent],
  imports: [
    CommonModule,
    KonyvekRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    NavModule
  ]
})
export class KonyvekModule { }
