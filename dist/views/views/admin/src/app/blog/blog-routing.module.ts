import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'details',
        component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule { }
