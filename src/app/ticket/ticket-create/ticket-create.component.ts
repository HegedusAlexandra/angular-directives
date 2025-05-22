import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Ticket } from '../../model/ticket';
import { TicketService } from '../../service/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.scss',
})
export class TicketCreateComponent {
  ticketService = inject(TicketService);
  ticket = new Ticket();
  form: FormGroup = new FormGroup({
    flightNumber: new FormControl<string>(''),
    service: new FormControl<string>(''),
    seat: new FormControl<string>(''),
    checked: new FormControl<boolean>(false),
  });
}
