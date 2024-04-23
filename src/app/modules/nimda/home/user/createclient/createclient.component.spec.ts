import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclientComponent } from './createclient.component';

describe('CreateclientComponent', () => {
  let component: CreateclientComponent;
  let fixture: ComponentFixture<CreateclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateclientComponent]
    });
    fixture = TestBed.createComponent(CreateclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
