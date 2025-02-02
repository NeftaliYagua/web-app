import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDocumentsTabComponent } from './entity-documents-tab.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

describe('EntityDocumentsTabComponent', () => {
  let component: EntityDocumentsTabComponent;
  let fixture: ComponentFixture<EntityDocumentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityDocumentsTabComponent],
      imports: [
        MatDialogModule,
        HttpClientModule,
        CommonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDocumentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
