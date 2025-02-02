import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableTabComponent } from './datatable-tab.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DatatableTabComponent', () => {
  let component: DatatableTabComponent;
  let fixture: ComponentFixture<DatatableTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableTabComponent],
      providers: [
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
    fixture = TestBed.createComponent(DatatableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
