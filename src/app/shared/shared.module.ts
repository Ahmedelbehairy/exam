import { RouterModule } from '@angular/router';
import { loginComponent } from './Login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { UndefinedComponent } from './undefined/undefined.component';


@NgModule({
  declarations: [
    SharedComponent,
    loginComponent,
    RegisterComponent,
    LogoutComponent,
    UndefinedComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    SharedComponent,
    loginComponent,
    RegisterComponent,
    LogoutComponent,
    UndefinedComponent
  ],
})
export class SharedModule {}
