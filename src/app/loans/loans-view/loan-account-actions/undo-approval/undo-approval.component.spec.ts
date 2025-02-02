import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoApprovalComponent } from './undo-approval.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

describe('UndoApprovalComponent', () => {
  let component: UndoApprovalComponent;
  let fixture: ComponentFixture<UndoApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UndoApprovalComponent],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule
      ],
      providers: [DatePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
