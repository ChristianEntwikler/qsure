import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsonlyComponent } from './shopsonly.component';

describe('ShopsonlyComponent', () => {
  let component: ShopsonlyComponent;
  let fixture: ComponentFixture<ShopsonlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopsonlyComponent]
    });
    fixture = TestBed.createComponent(ShopsonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
