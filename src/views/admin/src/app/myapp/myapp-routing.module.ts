import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { ComposeComponent } from './compose/compose.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
    }, {
        path: 'inbox',
        component: InboxComponent
    }, {
        path: 'compose',
        component: ComposeComponent
    }, {
        path: 'single',
        component: SingleComponent
    }, {
        path: 'chat',
        component: ChatComponent
    }, {
        path: 'contact',
        component: ContactComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyappRoutingModule { }
