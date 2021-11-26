import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnismeretComponent } from './onismeret.component';
import { OnismeretRoutingModule } from './onismeret-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from '../../../shared/components/container/container.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [OnismeretComponent],
  imports: [
     CommonModule,
     OnismeretRoutingModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatFormFieldModule,
     ReactiveFormsModule,
     ContainerModule,
     MatListModule,

  ]
})
export class OnismeretModule { }
