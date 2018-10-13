import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { AgentRoutingModule } from './agent-routing.module';

import { ClientsComponent } from '../admin/clients.component'
import { UsersComponent } from '../admin/users.component'

@NgModule({
  imports: [
    CommonModule,
    AgentRoutingModule
  ],
  declarations: [
    , ClientsComponent
    , UsersComponent
  ]
})
export class AgentModule { }
