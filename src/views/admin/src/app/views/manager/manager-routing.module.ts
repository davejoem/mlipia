import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AccountsComponent } from '../admin/accounts.component'
import { ClientsComponent } from '../admin/clients.component'
import { TransactionsComponent } from '../admin/transactions.component'
import { ManagerComponent } from './manager.component'

const routes: Routes = [
  {
    path: 'manager',
    component: ManagerComponent,
    data: {
      title: 'Administrator'
    },
    children: [
      {
        path: 'transactions',
        component: TransactionsComponent,
        data: {
          title: 'Transactions'
        }
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        data: {
          title: 'Accounts'
        }
      },
      {
        path: 'clients',
        component: ClientsComponent,
        data: {
          title: 'Clients'
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
