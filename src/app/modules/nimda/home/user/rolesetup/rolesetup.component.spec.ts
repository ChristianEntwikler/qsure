import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesetupComponent } from './rolesetup.component';

describe('RolesetupComponent', () => {
  let component: RolesetupComponent;
  let fixture: ComponentFixture<RolesetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesetupComponent]
    });
    fixture = TestBed.createComponent(RolesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
