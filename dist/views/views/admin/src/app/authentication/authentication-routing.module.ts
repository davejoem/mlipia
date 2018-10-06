import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { PageofflineComponent } from './pageoffline/pageoffline.component';
import { LockedComponent } from './locked/locked.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    }, {
        path: 'signin',
        component: SigninComponent
    }, {
        path: 'signup',
        component: SignupComponent
    }, {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
    }, {
        path: 'page404',
        component: Page404Component
    }, {
        path: 'page500',
        component: Page500Component
    }, {
        path: 'pageoffline',
        component: PageofflineComponent
    }, {
        path: 'locked',
        component: LockedComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
