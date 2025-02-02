import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoTransactionDialogComponent } from './undo-transaction-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

describe('UndoTransactionDialogComponent', () => {
  let component: UndoTransactionDialogComponent;
  let fixture: ComponentFixture<UndoTransactionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UndoTransactionDialogComponent],
      imports: [
        MatDialogModule,
        TranslateModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {}
          } as MatDialogRef<UndoTransactionDialogComponent>
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
