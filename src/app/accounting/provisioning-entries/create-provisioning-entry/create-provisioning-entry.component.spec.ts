import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProvisioningEntryComponent } from './create-provisioning-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

describe('CreateProvisioningEntryComponent', () => {
  let component: CreateProvisioningEntryComponent;
  let fixture: ComponentFixture<CreateProvisioningEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProvisioningEntryComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [DatePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProvisioningEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
