import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { User } from '../../user.service'
import { ClientsComponent } from '../content/clients.component'
import { TransactionsComponent } from '../content/transactions.component'
import { LendersComponent } from '../content/lenders.component'

const routes: Routes = [
  {
    path: ''
    , data: { title: 'Approver', expectedRole: 'approver' }
    , canActivate: [User]
    , canLoad: [User]
    , children: [
      {
        path: 'transactions/:select'
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproverRoutingModule { }
