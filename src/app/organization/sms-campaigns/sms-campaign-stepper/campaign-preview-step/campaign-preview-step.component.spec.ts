import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPreviewStepComponent } from './campaign-preview-step.component';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CampaignPreviewStepComponent', () => {
  let component: CampaignPreviewStepComponent;
  let fixture: ComponentFixture<CampaignPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignPreviewStepComponent],
      imports: [TranslateModule],
      providers: [TranslateModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPreviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
