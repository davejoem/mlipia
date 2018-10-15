import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap/modal'

import { AgentRoutingModule } from './agent-routing.module'
import { ContentModule } from '../content/content.module';

@NgModule({
  imports: [
    CommonModule
    , ContentModule
    , AgentRoutingModule
    , ModalModule.forRoot()
  ]
})
export class AgentModule { }
