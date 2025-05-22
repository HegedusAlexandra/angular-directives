import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEditorComponent } from './ticket-editor.component';

describe('TicketEditorComponent', () => {
  let component: TicketEditorComponent;
  let fixture: ComponentFixture<TicketEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
