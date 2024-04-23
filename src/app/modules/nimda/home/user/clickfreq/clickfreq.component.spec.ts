import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickfreqComponent } from './clickfreq.component';

describe('ClickfreqComponent', () => {
  let component: ClickfreqComponent;
  let fixture: ComponentFixture<ClickfreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickfreqComponent]
    });
    fixture = TestBed.createComponent(ClickfreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
