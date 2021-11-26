import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenzugyComponent } from './penzugy.component';
import { PenzugyRoutingModule } from './penzugy-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from '../../../shared/components/container/container.module';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [PenzugyComponent],
  imports: [
        CommonModule,
        PenzugyRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        ContainerModule,
        MatListModule,

  ]
})
export class PenzugyModule { }
