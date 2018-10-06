import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BlankComponent } from './blank/blank.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchComponent } from './search/search.component';
import { RtlComponent } from './rtl/rtl.component';
import { HmenuComponent } from './hmenu/hmenu.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [BlankComponent, ProfileComponent, TimelineComponent, InvoiceComponent, SearchComponent, RtlComponent, HmenuComponent]
})
export class PagesModule { }
