import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ApproverComponent } from './approver.component';
import { ApproverRoutingModule } from './approver-routing.module';

@NgModule({
  imports: [
    ApproverRoutingModule,
    ApproverComponent
  ],
  declarations: [ApproverComponent]
})
export class ApproverModule { }
