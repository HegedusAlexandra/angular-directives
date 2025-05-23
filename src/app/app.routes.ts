import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tickets',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./page/tickets/tickets.component').then(
            (m) => m.TicketsComponent
          ),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./ticket/ticket-editor/ticket-editor.component').then(
            (m) => m.TicketEditorComponent
          ),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./ticket/ticket-create/ticket-create.component').then(
            (m) => m.TicketCreateComponent
          ),
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
