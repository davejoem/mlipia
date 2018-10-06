import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { AddComponent } from './add/add.component';
import { AllComponent } from './all/all.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  imports: [    
    CommonModule,
    DepartmentsRoutingModule,
    DropzoneModule
  ],
  declarations: [AddComponent, AllComponent]
})
export class DepartmentsModule { }
