import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    DropzoneModule
  ],
  declarations: [AllComponent, AddComponent, ProfileComponent, ScheduleComponent]
})
export class DoctorsModule { }
