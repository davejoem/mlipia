import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproverComponent } from './approver.component';

import { AccountsComponent } from '../admin/accounts.component'
import { ClientsComponent } from '../admin/clients.component'
import { TransactionsComponent } from '../admin/transactions.component'

const routes: Routes = [
  {
    path: 'approver',
    component: ApproverComponent,
    data: {
      title: 'Approver'
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
export class ApproverRoutingModule { }
