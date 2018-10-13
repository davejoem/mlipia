import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  imports: [
    ManagerRoutingModule,
    ManagerComponent
  ],
  declarations: [ManagerComponent]
})
export class ManagerModule { }
