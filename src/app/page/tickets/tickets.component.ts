import { Component, inject } from '@angular/core';
import {
  BtnGroupComponent,
  IBtn,
} from '../../common/btn-group/btn-group.component';
import { Ticket } from '../../model/ticket';
import { TicketService } from '../../service/ticket.service';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from '../../common/nav/nav.component';
import { ArrayFilterPipe } from '../../pipe/array-filter.pipe';
import { BooleanPipe } from '../../pipe/boolean.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  imports: [
    BtnGroupComponent,
    CommonModule,
    AlertModule,
    ModalModule,
    BooleanPipe,
    ArrayFilterPipe,
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  title = 'angular-directives';

  ticketService: TicketService = inject(TicketService);

  isSearchBarVisible: boolean = false;

  toggleSearchbar(): void {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  tickets: Ticket[] = [
    {
      id: 1,
      checked: false,
      flightNumber: 'wa3421',
      seat: 'A5',
      service: 'economy',
    },
    {
      id: 2,
      checked: true,
      flightNumber: 'wk3421',
      seat: 'E3',
      service: 'economy',
    },
    {
      id: 3,
      checked: false,
      flightNumber: 'wa3621',
      seat: 'F3',
      service: 'business',
    },
  ];

  btnGroup: IBtn[] = [
    { name: 'show', type: 'info', icon: 'fa fa-eye' },
    { name: 'remove', type: 'danger', icon: 'fa fa-trash' },
  ];

  tickets$ = this.ticketService.list$;

  ngOnInit(): void {
    this.ticketService.dispatch('getAll');

    /* const testTicket: Ticket = {
      id: 0,
      checked: false,
      flightNumber: 'wa3421',
      seat: 'A5',
      service: 'economy',
    };

    this.ticketService
      .create(testTicket)
      .subscribe((ticket) => console.log(ticket));

    this.ticketService
      .getAll()
      .subscribe((tickets) => console.log(tickets)); */
  }

  /*   onGroupClick(details: { name: string; data: any }) {
    if (details.name === 'remove') {
      const index = this.tickets.findIndex((ticket) => ticket === details.data);
      if (index > -1) {
        this.tickets.splice(index, 1);
      }
    }
  } */

  router = inject(Router);

  onGroupClick(details: { name: string; data: any }) {
    console.log(details);

    switch (details.name) {
      case 'remove':
        this.ticketService.dispatch('delete', details.data as Ticket);
        break;
      case 'show':
        this.router.navigate(['tickets/edit', details.data.id]);
        //this.ticketService.dispatch('get', (details.data as Ticket).id);
        break;
    }
  }
  goToCreate():void {
    console.log('fired');
    
    this.router.navigate(['/tickets/create']);
  }
  filterPhrase: string = '';
}
