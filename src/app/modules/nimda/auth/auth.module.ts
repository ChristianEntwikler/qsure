import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    //BrowserModule
    
  ]
})
export class AuthModule { }
