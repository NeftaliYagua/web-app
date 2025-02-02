import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProductAccountingStepComponent } from './loan-product-accounting-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

describe('LoanProductAccountingStepComponent', () => {
  let component: LoanProductAccountingStepComponent;
  let fixture: ComponentFixture<LoanProductAccountingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanProductAccountingStepComponent],
      imports: [
        ReactiveFormsModule,
        MatDialogModule
      ],
      providers: [TranslateService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProductAccountingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
