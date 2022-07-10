import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitiesDoctorComponent } from './availabilities-doctor.component';

describe('AvailibilitiesDoctorComponent', () => {
  let component: AvailabilitiesDoctorComponent;
  let fixture: ComponentFixture<AvailabilitiesDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilitiesDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitiesDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
