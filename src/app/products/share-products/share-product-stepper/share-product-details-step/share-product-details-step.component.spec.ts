import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductDetailsStepComponent } from './share-product-details-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShareProductDetailsStepComponent', () => {
  let component: ShareProductDetailsStepComponent;
  let fixture: ComponentFixture<ShareProductDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareProductDetailsStepComponent],
      imports: [
        ReactiveFormsModule,
        TranslateModule
      ],
      providers: [TranslateService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
