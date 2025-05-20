import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ticket } from './model/ticket';
import {
  BtnGroupComponent,
  IBtn,
} from './common/btn-group/btn-group.component';
import { BooleanPipe } from './pipe/boolean.pipe';
import { ArrayFilterPipe } from './pipe/array-filter.pipe';
import { TicketService } from './service/ticket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    BtnGroupComponent,
    CommonModule,
    AlertModule,
    ModalModule,
    BooleanPipe,
    ArrayFilterPipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  onGroupClick(details: { name: string; data: any }) {
    if (details.name === 'remove') {
      const index = this.tickets.findIndex((ticket) => ticket === details.data);
      if (index > -1) {
        this.tickets.splice(index, 1);
      }
    }
  }

  filterPhrase: string = '';
}
