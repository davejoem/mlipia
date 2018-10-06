import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'appointment',
        component: AppointmentComponent
    }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }, {
        path: 'doctors',
        loadChildren: 'app/doctors/doctors.module#DoctorsModule'
    }, {
        path: 'patients',
        loadChildren: 'app/patients/patients.module#PatientsModule'
    }, {
        path: 'payments',
        loadChildren: 'app/payments/payments.module#PaymentsModule'
    }, {
        path: 'departments',
        loadChildren: 'app/departments/departments.module#DepartmentsModule'
    }, {
        path: 'blog',
        loadChildren: 'app/blog/blog.module#BlogModule'
    }, {
        path: 'filemanager',
        loadChildren: 'app/filemanager/filemanager.module#FilemanagerModule'
    }, {
        path: 'pages',
        loadChildren: 'app/pages/pages.module#PagesModule'
    }, {
        path: 'ui',
        loadChildren: 'app/ui/ui.module#UiModule'
    }, {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
    }, {
        path: 'widgets',
        loadChildren: 'app/widgets/widgets.module#WidgetsModule'
    }, {
        path: 'myapp',
        loadChildren: 'app/myapp/myapp.module#MyappModule'
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
