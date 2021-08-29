import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlertDivComponent } from './form-alert-div.component';

describe('FormAlertDivComponent', () => {
  let component: FormAlertDivComponent;
  let fixture: ComponentFixture<FormAlertDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlertDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlertDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
