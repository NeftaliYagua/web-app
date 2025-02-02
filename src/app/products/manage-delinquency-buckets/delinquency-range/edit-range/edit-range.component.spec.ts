import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRangeComponent } from './edit-range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

describe('EditRangeComponent', () => {
  let component: EditRangeComponent;
  let fixture: ComponentFixture<EditRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRangeComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
      ],
      providers: [DatePipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
