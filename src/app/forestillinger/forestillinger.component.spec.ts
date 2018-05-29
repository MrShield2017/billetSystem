import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ForestillingerComponent } from './forestillinger.component';
/* import { HttpClientModule } from '@angular/common/http'; */

describe('ForestillingerComponent', () => {
  let component: ForestillingerComponent;
  let fixture: ComponentFixture<ForestillingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        /* HttpClientModule, */
        HttpClientTestingModule
      ],
      declarations: [ ForestillingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestillingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(inject([HttpClientTestingModule], (httpClient: HttpClientTestingModule) => {
    expect(component).toBeTruthy();
  })));
});
