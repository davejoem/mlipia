import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar'
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'
import { StorageServiceModule } from 'ngx-webstorage-service'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

import { AppComponent } from './app.component'

// Import containers
import { DefaultLayoutComponent } from './containers'

import { P404Component } from './views/error/404.component'
import { P500Component } from './views/error/500.component'
import { SigninComponent } from './views/signin/signin.component'
import { RegisterComponent } from './views/register/register.component'

const APP_CONTAINERS = [
  DefaultLayoutComponent
]

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

//import our services
import { Api } from './api.service'
import { User } from './user.service'
import { Storage as Store } from './storage.service'

// Import routing module
import { AppRoutingModule } from './app.routing'

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ChartsModule } from 'ng2-charts/ng2-charts'
import { AdminComponent } from './views/admin/admin.component';
import { ManagerComponent } from './views/manager/manager.component';
import { ApproverComponent } from './views/approver/approver.component';
import { AgentComponent } from './views/agent/agent.component';
import { AccountsComponent } from './views/admin/accounts.component';
import { TransactionsComponent } from './views/admin/transactions.component';
import { UsersComponent } from './views/admin/users.component';
import { ClientsComponent } from './views/admin/clients.component';
import { GroupsComponent } from './views/admin/groups.component';
import { LendersComponent } from './views/admin/lenders.component';

export function providers() {
  return [
    Api
    , Store
    , User
    , {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PerfectScrollbarModule,
    StorageServiceModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    AccountsComponent,
    AdminComponent,
    ManagerComponent,
    ApproverComponent,
    AgentComponent,
    ClientsComponent,
    GroupsComponent,
    LendersComponent,
    TransactionsComponent,
    UsersComponent,
    P404Component,
    P500Component,
    SigninComponent,
    RegisterComponent
  ],
  providers: providers(),
  bootstrap: [AppComponent]
})
export class AppModule { }
