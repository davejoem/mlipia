import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AccountsComponent } from './accounts.component'
import { ClientsComponent } from './clients.component'
import { GroupsComponent } from './groups.component'
import { TransactionsComponent } from './transactions.component'
import { UsersComponent } from './users.component'
import { AdminRoutingModule } from './admin-routing.module'
import { LendersComponent } from './lenders.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AccountsComponent
    , ClientsComponent
    , GroupsComponent
    , LendersComponent
    , TransactionsComponent
    , UsersComponent
  ]
})
export class AdminModule { }
