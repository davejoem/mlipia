import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { User } from '../../user.service'

import { AccountsComponent } from '../content/accounts.component'
import { ClientsComponent } from '../content/clients.component'
import { LendersComponent } from '../content/lenders.component'
import { TransactionsComponent } from '../content/transactions.component'

const routes: Routes = [
  {
    path: ''
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
        path: 'transactions/:select'
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
