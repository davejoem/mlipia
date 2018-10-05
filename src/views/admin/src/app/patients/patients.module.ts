import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule,
    DropzoneModule
  ],
  declarations: [AllComponent, AddComponent, ProfileComponent, InvoiceComponent]
})
export class PatientsModule { }
