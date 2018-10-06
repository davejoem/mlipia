import { NgModule } from '@angular/core';
import { LockedComponent } from './locked/locked.component';
import { PageofflineComponent } from './pageoffline/pageoffline.component';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [SigninComponent, SignupComponent, ForgotpasswordComponent, PageofflineComponent, LockedComponent, Page404Component, Page500Component]
})
export class AuthenticationModule { }
