import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositGeneralTabComponent } from './recurring-deposit-general-tab.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecurringDepositGeneralTabComponent', () => {
  let component: RecurringDepositGeneralTabComponent;
  let fixture: ComponentFixture<RecurringDepositGeneralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecurringDepositGeneralTabComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositGeneralTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
