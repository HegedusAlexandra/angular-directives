import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
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
        validators: [Validators.required,this.validateAirline()],
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
          Validators.pattern(/^[A-Za-z]{1}[0-9]{1}$/),
        ],
      }
    ),
    checked: new FormControl<boolean>(false),
  });

  isValid(name: string): boolean {
    return (
      this.form.controls[name]?.pristine || this.form.controls[name]?.valid
    );
  }

  validateAirline(): ValidatorFn {
    return (control: AbstractControl) => {
      if (this.form) {
        const flightNumber = this.form.controls['flightNumber'].value;
        if (flightNumber.slice(0, 2).toLowerCase() !== 'wz') {
          return null;
        }

        const service = this.form.controls['service'].value;
        if (service === 'business') {
          return { airlineError: 'Wizzair does not have business class!' };
        }

        return null;
      }
      return null;
    };
  }
}
