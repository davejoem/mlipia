import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchComponent } from './search/search.component';
import { RtlComponent } from './rtl/rtl.component';
import { HmenuComponent } from './hmenu/hmenu.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'blank',
        pathMatch: 'full'
    }, {
        path: 'blank',
        component: BlankComponent
    }, {
        path: 'hmenu',
        component: HmenuComponent
    }, {
        path: 'invoice',
        component: InvoiceComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'timeline',
        component: TimelineComponent
    }, {
        path: 'search',
        component: SearchComponent
    }, {
        path: 'rtl',
        component: RtlComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }
