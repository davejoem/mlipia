import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilemanagerRoutingModule } from './filemanager-routing.module';
import { AllComponent } from './all/all.component';
import { DocumentsComponent } from './documents/documents.component';
import { MediaComponent } from './media/media.component';
import { ImagesComponent } from './images/images.component';

@NgModule({
  imports: [
    CommonModule,
    FilemanagerRoutingModule
  ],
  declarations: [AllComponent, DocumentsComponent, MediaComponent, ImagesComponent]
})
export class FilemanagerModule { }
