import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ManagerRoutingModule } from './manager-routing.module'

import { AccountsComponent } from '../admin/accounts.component'
import { ClientsComponent } from '../admin/clients.component'
import { TransactionsComponent } from '../admin/transactions.component'
import { LendersComponent } from '../admin/lenders.component';

@NgModule({
  imports: [
    CommonModule
    , ManagerRoutingModule
  ],
  declarations: [
    AccountsComponent
    , ClientsComponent
    , LendersComponent
    , TransactionsComponent
  ]
})
export class ManagerModule { }
