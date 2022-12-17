import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports:[
    HomeComponent,
    FeaturesComponent
  ]
})
export class FeaturesModule { }
