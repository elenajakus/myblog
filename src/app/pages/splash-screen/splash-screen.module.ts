import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { ContainerModule } from 'src/app/shared/components/container/container.module';



@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule,
    SplashScreenRoutingModule,
    MatCardModule,
    MatRippleModule,
    OnHoverModule,
    ContainerModule
  ]
})
export class SplashScreenModule { }
