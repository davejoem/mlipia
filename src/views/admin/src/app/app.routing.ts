import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Import Containers
import { DefaultLayoutComponent } from './containers'

import { P404Component } from './views/error/404.component'
import { P500Component } from './views/error/500.component'
import { SigninComponent } from './views/signin/signin.component'
import { RegisterComponent } from './views/register/register.component'
import { User } from './user.service';

export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: {
      title: 'Sign In'
    }
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'admin'
        , data: { title: 'Administrator', expectedRole: 'admin' }
        , canActivate: [User]
        , canLoad: [User]
        , loadChildren: './views/admin/admin.module#AdminModule'
      },
      {
        path: 'manager'
        , loadChildren: './views/manager/manager.module#ManagerModule'
      },
      {
        path: 'approver'
        , loadChildren: './views/approver/approver.module#ApproverModule'
      },
      {
        path: 'agent'
        , loadChildren: './views/agent/agent.module#AgentModule'
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
