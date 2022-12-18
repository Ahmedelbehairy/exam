import { FeaturesModule } from './features/features.module';
import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './shared/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './shared/Login/login.component';
import { HomeComponent } from './features/home/home.component';
import { GardeGuard } from './garde.guard';
import { UndefinedComponent } from './shared/undefined/undefined.component';

const routes: Routes = [
  {path:'shared', component:SharedComponent, children:[
    {path:'login', component:loginComponent},
    { path: 'register',  component:RegisterComponent}
  ]},
  { path: 'home',canActivate: [GardeGuard],component:HomeComponent},
  {path:'**' ,component:UndefinedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SharedModule,FeaturesModule],
  exports: [RouterModule, SharedModule, FeaturesModule]
})
export class AppRoutingModule { }
