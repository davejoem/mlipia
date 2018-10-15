import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ModalModule } from 'ngx-bootstrap/modal'

// modules to import
import { ContentModule } from '../content/content.module';
import { ManagerRoutingModule } from './manager-routing.module'

@NgModule({
  imports: [
    CommonModule
    , ContentModule
    , ManagerRoutingModule
    , ModalModule.forRoot()
  ]
})
export class ManagerModule { }
