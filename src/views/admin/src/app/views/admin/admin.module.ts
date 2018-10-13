import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdminComponent } from './admin.component'
import { AdminRoutingModule } from './admin-routing.module'

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminComponent
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
