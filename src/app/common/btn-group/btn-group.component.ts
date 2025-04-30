import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectDirective } from './select.directive';

export interface IBtn {
  type: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-btn-group',
  imports: [CommonModule, SelectDirective],
  templateUrl: './btn-group.component.html',
  styleUrl: './btn-group.component.scss',
})
export class BtnGroupComponent {
  @Input() buttons: IBtn[] = [];
  @Input() data: any = null;
  @Output() btnClick: EventEmitter<{ name: string; data: any }> =
    new EventEmitter();
  raiseClick(name: string): void {
    this.btnClick.emit({ name, data: this.data });
  }
  btnGroup: IBtn[] = []
  
}
