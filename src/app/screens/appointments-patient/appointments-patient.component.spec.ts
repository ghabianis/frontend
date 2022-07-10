import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsPatientComponent } from './appointments-patient.component';

describe('AppointmentsPatientComponent', () => {
  let component: AppointmentsPatientComponent;
  let fixture: ComponentFixture<AppointmentsPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
