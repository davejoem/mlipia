import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ClientsComponent } from '../admin/clients.component'
import { AgentComponent } from './agent.component';

const routes: Routes = [
  {
    path: 'agent',
    component: AgentComponent,
    data: {
      title: 'Agent'
    },
    children: [
      {
        path: 'clients',
        component: ClientsComponent,
        data: {
          title: 'Clients'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
