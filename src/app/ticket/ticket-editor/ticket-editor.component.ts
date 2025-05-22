import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../service/ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../model/ticket';

@Component({
  selector: 'app-ticket-editor',
  imports: [CommonModule,FormsModule],
  templateUrl: './ticket-editor.component.html',
  styleUrl: './ticket-editor.component.scss',
})
export class TicketEditorComponent {
  ticketService = inject(TicketService);
  router = inject(Router)
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');

  ticket$ = this.ticketService.one$;

  ngOnInit(): void {
    if (this.id) {
      this.ticketService.dispatch('get', this.id);
    }
  }

  onUpdate(ticket: Ticket):void{
    this.ticketService.update(ticket).subscribe(updatedTicket => this.router.navigate(['/tickets']))
  }
}
