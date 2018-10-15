import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap/modal'

import { ApproverRoutingModule } from './approver-routing.module'
import { ContentModule } from '../content/content.module'

@NgModule({
  imports: [
    ApproverRoutingModule
    , CommonModule
    , ContentModule
    , ModalModule.forRoot()
  ]
})
export class ApproverModule { }
