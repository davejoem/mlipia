import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { User } from '../../user.service'

import { AccountsComponent } from '../content/accounts.component'
import { ClientsComponent } from '../content/clients.component'
import { GroupsComponent } from '../content//groups.component'
import { LendersComponent } from '../content//lenders.component'
import { TransactionsComponent } from '../content//transactions.component'
import { UsersComponent } from '../content//users.component'

const routes: Routes = [
  {
    path: ''
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
        path: 'transactions/:select'
        , component: TransactionsComponent
        , data: { title: 'Transactions', expectedRole: 'admin' }
        , canActivateChild: [User]
      }
      , {
        path: 'users/:select'
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
