import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizpageSelectorComponent } from './quizpage-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { QuizpageSelectorRoutingModule } from './quizpage-selector-routing.module';
import { ContainerModule } from 'src/app/shared/components/container/container.module';


@NgModule({
  declarations: [QuizpageSelectorComponent],
  imports: [
    CommonModule,
    QuizpageSelectorRoutingModule,
    MatCardModule,
    MatRippleModule,
    OnHoverModule,
    ContainerModule
  ]
})
export class QuizpageSelectorModule { }


