import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TicketsComponent } from './page/tickets/tickets.component';
import { AboutComponent } from './page/about/about.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'tickets',
        component: TicketsComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'**',
        redirectTo: ''
    },
];
