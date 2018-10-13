import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AccountsComponent } from './accounts.component'
import { AdminComponent } from './admin.component'
import { ClientsComponent } from './clients.component'
import { GroupsComponent } from './groups.component'
import { TransactionsComponent } from './transactions.component'
import { UsersComponent } from './users.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administrator'
    },
    children: [
      {
        path: 'groups',
        component: GroupsComponent,
        data: {
          title: 'Groups'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Groups'
        }
      },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
