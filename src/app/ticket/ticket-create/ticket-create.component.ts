import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Ticket } from '../../model/ticket';
import { TicketService } from '../../service/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.scss',
})
export class TicketCreateComponent {
  ticketService = inject(TicketService);
  ticket = new Ticket();
  form: FormGroup = new FormGroup({
    flightNumber: new FormControl<string>(
      {
        value: '',
        disabled: false,
      },
      {
        validators: [
          Validators.required,
          Validators.pattern(/^[A-Za-z]{2}[0-9]{4}$/),
        ],
      }
    ),
    service: new FormControl<string>(
      {
        value: '',
        disabled: false,
      },
      {
        validators: [Validators.required],
      }
    ),
    seat: new FormControl<string>(
      {
        value: '',
        disabled: false,
      },
      {
        validators: [
          Validators.required,
          Validators.pattern(/^[A-Za-z]{2}[0-9]{4}$/),
        ],
      }
    ),
    checked: new FormControl<boolean>(false),
  });
}
