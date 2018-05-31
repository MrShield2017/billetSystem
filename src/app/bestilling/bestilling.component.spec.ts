import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestillingComponent } from './bestilling.component';

describe('BestillingComponent', () => {
  let component: BestillingComponent;
  let fixture: ComponentFixture<BestillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
