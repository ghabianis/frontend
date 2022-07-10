import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitiesCalendarComponent } from './availabilities-calendar.component';

describe('AvaialabilitiesCalandarComponent', () => {
  let component: AvailabilitiesCalendarComponent;
  let fixture: ComponentFixture<AvailabilitiesCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilitiesCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitiesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
