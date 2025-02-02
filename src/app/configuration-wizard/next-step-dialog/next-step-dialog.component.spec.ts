import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepDialogComponent } from './next-step-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('NextStepDialogComponent', () => {
  let component: NextStepDialogComponent;
  let fixture: ComponentFixture<NextStepDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextStepDialogComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
