import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap/modal'

import { AccountsComponent } from './accounts.component'
import { ClientsComponent } from './clients.component'
import { GroupsComponent } from './groups.component'
import { TransactionsComponent } from './transactions.component'
import { UsersComponent } from './users.component'
import { LendersComponent } from './lenders.component'

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
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
export class ContentModule { }
