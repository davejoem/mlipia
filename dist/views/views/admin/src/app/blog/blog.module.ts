import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { DetailsComponent } from './details/details.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    DropzoneModule
  ],
  declarations: [DashboardComponent, PostComponent, ListComponent, GridComponent, DetailsComponent]
})
export class BlogModule { }
