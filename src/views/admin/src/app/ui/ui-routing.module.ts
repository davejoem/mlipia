import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitComponent } from './kit/kit.component';
import { TabsComponent } from './tabs/tabs.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ColorsComponent } from './colors/colors.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { IconsComponent } from './icons/icons.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { MediaobjectComponent } from './mediaobject/mediaobject.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { RangeslidersComponent } from './rangesliders/rangesliders.component';
import { SortablenestableComponent } from './sortablenestable/sortablenestable.component';
import { WavesComponent } from './waves/waves.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'kit',
        pathMatch: 'full'
    }, {
        path: 'kit',
        component: KitComponent
    }, {
        path: 'alerts',
        component: AlertsComponent
    }, {
        path: 'collapsed',
        component: CollapseComponent
    }, {
        path: 'colors',
        component: ColorsComponent
    }, {
        path: 'dialogs',
        component: DialogsComponent
    }, {
        path: 'icons',
        component: IconsComponent
    }, {
        path: 'listgroup',
        component: ListgroupComponent
    }, {
        path: 'mediaobject',
        component: MediaobjectComponent
    }, {
        path: 'modals',
        component: ModalsComponent
    }, {
        path: 'notifications',
        component: NotificationsComponent
    }, {
        path: 'progressbars',
        component: ProgressbarsComponent
    }, {
        path: 'rangesliders',
        component: RangeslidersComponent
    }, {
        path: 'sortablenestable',
        component: SortablenestableComponent
    }, {
        path: 'tabs',
        component: TabsComponent
    }, {
        path: 'waves',
        component: WavesComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UiRoutingModule { }
