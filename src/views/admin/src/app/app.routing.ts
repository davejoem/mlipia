import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { SigninComponent } from './views/signin/signin.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminComponent } from './views/admin/admin.component';
import { ManagerComponent } from './views/manager/manager.component';
import { ApproverComponent } from './views/approver/approver.component';
import { AgentComponent } from './views/agent/agent.component';
import { AccountsComponent } from './views/admin/accounts.component';
import { TransactionsComponent } from './views/admin/transactions.component';
import { UsersComponent } from './views/admin/users.component';
import { GroupsComponent } from './views/admin/groups.component';
import { ClientsComponent } from './views/admin/clients.component';
import { LendersComponent } from './views/admin/lenders.component';
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
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'admin'
        , component: AdminComponent
        , data: { title: 'Administrator', expectedRole: 'admin' }
        , canActivate: [User]
        , canLoad: [User]
        , children: [
          {
            path: 'accounts'
            , component: AccountsComponent
            , data: { title: 'Accounts', expectedRole: 'admin' }
            , canActivateChild: [User]
          }
          , {
            path: 'transactions'
            , component: TransactionsComponent
            , data: { title: 'Transactions', expectedRole: 'admin' }
            , canActivateChild: [User]
          }
          , {
            path: 'users'
            , component: UsersComponent
            , data: { title: 'Users', expectedRole: 'admin' }
            , canActivateChild: [User]
          }
          , {
            path: 'groups'
            , component: GroupsComponent
            , data: { title: 'Groups', expectedRole: 'admin' }
            , canActivateChild: [User]
          }
          , {
            path: 'clients'
            , component: ClientsComponent
            , data: { title: 'Clients', expectedRole: 'admin' }
            , canActivateChild: [User]
          }
          , {
            path: 'lenders'
            , component: LendersComponent
            , data: { title: 'Lenders', expectedRole: 'admin' }
            , canActivateChild: [User]
          }
        ]
      },
      {
        path: 'manager'
        , component: ManagerComponent
        , data: { title: 'Manager', expectedRole: 'manager' }
        , canActivate: [User]
        , canLoad: [User]
        , children: [
          {
            path: 'accounts'
            , component: AccountsComponent
            , data: { title: 'Accounts', expectedRole: 'manager' }
            , canActivateChild: [User]
          }
          , {
            path: 'transactions'
            , component: TransactionsComponent
            , data: { title: 'Transactions', expectedRole: 'manager' }
            , canActivateChild: [User]
          }
          , {
            path: 'clients'
            , component: ClientsComponent
            , data: { title: 'Clients', expectedRole: 'manager' }
            , canActivateChild: [User]
          }
          , {
            path: 'lenders'
            , component: LendersComponent
            , data: { title: 'Lenders', expectedRole: 'manager' }
            , canActivateChild: [User]
          }
        ]
      },
      {
        path: 'approver'
        , component: ApproverComponent
        , data: { title: 'Approver', expectedRole: 'approver' }
        , canActivate: [User]
        , canLoad: [User]
        , children: [
          {
            path: 'transactions'
            , component: TransactionsComponent
            , data: { title: 'Transactions', expectedRole: 'approver' }
            , canActivateChild: [User]
          }
          , {
            path: 'clients'
            , component: ClientsComponent
            , data: { title: 'Clients', expectedRole: 'approver' }
            , canActivateChild: [User]
          }
          , {
            path: 'lenders'
            , component: LendersComponent
            , data: { title: 'Lenders', expectedRole: 'approver' }
            , canActivateChild: [User]
          }
        ]
      },
      {
        path: 'agent'
        , component: AgentComponent
        , data: { title: 'Agent', expectedRole: 'agent' }
        , canActivate: [User]
        , canLoad: [User]
        , children: [
          {
            path: 'clients'
            , component: ClientsComponent
            , data: { title: 'Clients', expectedRole: 'agent' }
            , canActivateChild: [User]
          }
        ]
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
    path: 'signin',
    component: SigninComponent,
    data: {
      title: 'Sign In'
    }
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
