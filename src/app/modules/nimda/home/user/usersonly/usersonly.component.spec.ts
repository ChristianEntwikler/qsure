import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersonlyComponent } from './usersonly.component';

describe('UsersonlyComponent', () => {
  let component: UsersonlyComponent;
  let fixture: ComponentFixture<UsersonlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersonlyComponent]
    });
    fixture = TestBed.createComponent(UsersonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
