import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestillingerComponent } from './forestillinger.component';

describe('ForestillingerComponent', () => {
  let component: ForestillingerComponent;
  let fixture: ComponentFixture<ForestillingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestillingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestillingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
