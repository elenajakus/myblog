import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizpagesComponent } from './quizpages.component';
import { QuizpagesRoutingModule } from './quizpages-routing.module';
import { NavModule } from '../nav/nav.module';
import { ContainerModule } from './../../shared/components/container/container.module';

@NgModule({
  declarations: [QuizpagesComponent],
  imports: [
       CommonModule,
       QuizpagesRoutingModule,
       NavModule
  ],
  exports:[QuizpagesComponent]
})

export class QuizpagesModule { }
