import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    },
    {
        path: 'all',
        component: AllComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'invoice',
        component: InvoiceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PaymentsRoutingModule { }
