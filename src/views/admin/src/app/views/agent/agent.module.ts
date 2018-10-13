import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent-routing.module';

@NgModule({
  imports: [
    AgentRoutingModule,
    AgentComponent
  ],
  declarations: [AgentComponent]
})
export class AgentModule { }
