import { FeaturesModule } from './features/features.module';
import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './shared/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './shared/Login/login.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'shared', component:SharedComponent, children:[
    {path:'login', component:loginComponent},
    {path:'register', component:RegisterComponent}
  ]},
  {path:'home' ,component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SharedModule,FeaturesModule],
  exports: [RouterModule, SharedModule, FeaturesModule]
})
export class AppRoutingModule { }
