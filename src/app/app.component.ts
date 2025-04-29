import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,NavComponent,CommonModule,AlertModule,
    ModalModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-directives';

  isSearchBarVisible:boolean = false;

  toggleSearchbar():void{
    this.isSearchBarVisible = !this.isSearchBarVisible
  }
}
