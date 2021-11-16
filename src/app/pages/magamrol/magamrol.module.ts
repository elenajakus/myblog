import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagamrolComponent } from './magamrol.component';
import { MagamrolRoutingModule } from './magamrol-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from './../../shared/components/container/container.module';



@NgModule({
  declarations: [MagamrolComponent],
  imports: [
    CommonModule,
    MagamrolRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ContainerModule,
  ]
})
export class MagamrolModule { }
