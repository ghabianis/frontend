import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDoctorsComponent } from './our-doctors.component';

describe('OurDoctorsComponent', () => {
  let component: OurDoctorsComponent;
  let fixture: ComponentFixture<OurDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
