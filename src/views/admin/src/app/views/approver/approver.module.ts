import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ClientsComponent } from '../admin/clients.component'

import { ApproverComponent } from './approver.component';
import { ApproverRoutingModule } from './approver-routing.module';

import { CommonModule } from '@angular/common'


@NgModule({
  imports: [
    CommonModule,
    ApproverRoutingModule
  ],
  declarations: [
    ClientsComponent
  ]
})
export class ApproverModule { }
