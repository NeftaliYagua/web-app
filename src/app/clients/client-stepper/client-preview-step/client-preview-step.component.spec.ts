import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPreviewStepComponent } from './client-preview-step.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ClientPreviewStepComponent', () => {
  let component: ClientPreviewStepComponent;
  let fixture: ComponentFixture<ClientPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPreviewStepComponent],
      imports: [TranslateModule],
      providers: [TranslateService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPreviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
