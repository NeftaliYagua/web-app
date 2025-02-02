import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGlAccountComponent } from './view-gl-account.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewGlAccountComponent', () => {
  let component: ViewGlAccountComponent;
  let fixture: ComponentFixture<ViewGlAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewGlAccountComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGlAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
