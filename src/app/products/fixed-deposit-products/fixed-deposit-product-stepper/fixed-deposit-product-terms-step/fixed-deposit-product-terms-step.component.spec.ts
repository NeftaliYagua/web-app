import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositProductTermsStepComponent } from './fixed-deposit-product-terms-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('FixedDepositProductTermsStepComponent', () => {
  let component: FixedDepositProductTermsStepComponent;
  let fixture: ComponentFixture<FixedDepositProductTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedDepositProductTermsStepComponent],
      imports: [
        ReactiveFormsModule,
        TranslateModule
      ],
      providers: [TranslateService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositProductTermsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
