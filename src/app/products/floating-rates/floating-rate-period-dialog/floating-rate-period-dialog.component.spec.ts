import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingRatePeriodDialogComponent } from './floating-rate-period-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('FloatingRatePeriodDialogComponent', () => {
  let component: FloatingRatePeriodDialogComponent;
  let fixture: ComponentFixture<FloatingRatePeriodDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingRatePeriodDialogComponent],
      imports: [MatDialogModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingRatePeriodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
