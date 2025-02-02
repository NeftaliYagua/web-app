import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCashierComponent } from './view-cashier.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

describe('ViewCashierComponent', () => {
  let component: ViewCashierComponent;
  let fixture: ComponentFixture<ViewCashierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCashierComponent],
      imports: [HttpClientModule],
      providers: [
        DatePipe,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
