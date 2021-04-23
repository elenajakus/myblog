import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {UserProfileRoutingModule} from './user-profile-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {ContainerModule} from '../../../shared/components/container/container.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';



// @ts-ignore
@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule, /*a felhasznalonak azt az emailcimet jeleniti meg, amivel regisztralt, nem lehet majd modositani*/
    MatRadioModule, /*nemre*/
    MatDatepickerModule /*birthdatere*/
  ]
})
export class UserProfileModule { }
