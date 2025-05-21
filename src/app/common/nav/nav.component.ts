import { Component, inject } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  config= inject(ConfigService);
  items= this.config.navigationItems;
}
