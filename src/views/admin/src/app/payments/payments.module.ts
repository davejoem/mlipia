import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ],
  declarations: [AllComponent, AddComponent, InvoiceComponent]
})
export class PaymentsModule { }
