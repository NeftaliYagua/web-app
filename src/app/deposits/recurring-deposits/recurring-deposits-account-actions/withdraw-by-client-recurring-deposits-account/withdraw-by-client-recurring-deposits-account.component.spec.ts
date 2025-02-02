import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawByClientRecurringDepositsAccountComponent } from './withdraw-by-client-recurring-deposits-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('WithdrawByClientRecurringDepositsAccountComponent', () => {
  let component: WithdrawByClientRecurringDepositsAccountComponent;
  let fixture: ComponentFixture<WithdrawByClientRecurringDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawByClientRecurringDepositsAccountComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawByClientRecurringDepositsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
