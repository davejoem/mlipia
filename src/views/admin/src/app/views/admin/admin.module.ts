import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap/modal'

import { AdminRoutingModule } from './admin-routing.module';
import { ContentModule } from '../content/content.module';

@NgModule({
  imports: [
    CommonModule
    , ContentModule
    , AdminRoutingModule
    , ModalModule.forRoot()
  ]
})
export class AdminModule { }
