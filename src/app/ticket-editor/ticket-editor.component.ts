import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../service/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-editor',
  imports: [CommonModule],
  templateUrl: './ticket-editor.component.html',
  styleUrl: './ticket-editor.component.scss',
})
export class TicketEditorComponent {
  ticketService = inject(TicketService);

  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  ticket$ = this.ticketService.one$;

  ngOnInit(): void {
    if (this.id) {
      this.ticketService.dispatch('get', this.id);
    }
  }
}
