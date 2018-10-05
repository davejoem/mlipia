import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
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

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [KitComponent, TabsComponent, AlertsComponent, CollapseComponent, ColorsComponent, DialogsComponent, IconsComponent, ListgroupComponent, MediaobjectComponent, ModalsComponent, NotificationsComponent, ProgressbarsComponent, RangeslidersComponent, SortablenestableComponent, WavesComponent]
})
export class UiModule { }
