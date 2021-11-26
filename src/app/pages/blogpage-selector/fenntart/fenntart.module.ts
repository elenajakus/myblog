import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FenntartComponent } from './fenntart.component';
import { FenntartRoutingModule } from './fenntart-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from '../../../shared/components/container/container.module';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [FenntartComponent],
  imports: [
     CommonModule,
     FenntartRoutingModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatFormFieldModule,
     ReactiveFormsModule,
     ContainerModule,
     MatListModule,
    MatCardModule
  ]
})
export class FenntartModule { }
