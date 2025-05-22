import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TicketsComponent } from './page/tickets/tickets.component';
import { AboutComponent } from './page/about/about.component';
import { TicketEditorComponent } from './ticket/ticket-editor/ticket-editor.component';
import { TicketCreateComponent } from './ticket/ticket-create/ticket-create.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'tickets/edit/:id', component: TicketEditorComponent  },
  { path: 'tickets/create', component: TicketCreateComponent },
  {
    path: '**',
    redirectTo: '',
  },
];
