import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsonlyComponent } from './clientsonly.component';

describe('ClientsonlyComponent', () => {
  let component: ClientsonlyComponent;
  let fixture: ComponentFixture<ClientsonlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsonlyComponent]
    });
    fixture = TestBed.createComponent(ClientsonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
