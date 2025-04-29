import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ticket } from './model/ticket';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, CommonModule, AlertModule, ModalModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-directives';

  isSearchBarVisible: boolean = false;

  toggleSearchbar(): void {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  tickets: Ticket[] = [
    {
      id: 1,
      checked: false,
      flightNumber: 'wa3421',
      seat: 'D3',
      service: 'economy',
    },
    {
      id: 2,
      checked: false,
      flightNumber: 'wa3421',
      seat: 'E3',
      service: 'economy',
    },
    {
      id: 3,
      checked: false,
      flightNumber: 'wa3421',
      seat: 'F3',
      service: 'economy',
    },
  ];
}
