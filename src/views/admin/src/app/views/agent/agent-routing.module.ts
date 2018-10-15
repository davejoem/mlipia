import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { User } from '../../user.service'

import { ClientsComponent } from '../content/clients.component'

const routes: Routes = [
  {
    path: ''
    , data: { title: 'Agent', expectedRole: 'agent' }
    , canActivate: [User]
    , canLoad: [User]
    , children: [
      {
        path: 'clients'
        , component: ClientsComponent
        , data: { title: 'Clients', expectedRole: 'agent' }
        , canActivateChild: [User]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
