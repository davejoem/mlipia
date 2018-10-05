import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyappRoutingModule } from './myapp-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { ComposeComponent } from './compose/compose.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  imports: [
    CommonModule,
    MyappRoutingModule
  ],
  declarations: [InboxComponent, ChatComponent, ContactComponent, ComposeComponent, SingleComponent]
})
export class MyappModule { }
