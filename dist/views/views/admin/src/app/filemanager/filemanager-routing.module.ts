import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { DocumentsComponent } from './documents/documents.component';
import { MediaComponent } from './media/media.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    }, {
        path: 'all',
        component: AllComponent
    },
    {
        path: 'documents',
        component: DocumentsComponent
    },
    {
        path: 'media',
        component: MediaComponent
    },
    {
        path: 'images',
        component: ImagesComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FilemanagerRoutingModule { }
