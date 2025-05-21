import { Component } from '@angular/core';
import { NavComponent } from './common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BtnGroupComponent } from './common/btn-group/btn-group.component';
import { BooleanPipe } from './pipe/boolean.pipe';
import { ArrayFilterPipe } from './pipe/array-filter.pipe';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    CommonModule,
    AlertModule,
    ModalModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
