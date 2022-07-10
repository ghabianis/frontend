import { TestBed } from '@angular/core/testing';

import { ApointmentService } from './apointment.service';

describe('ApointmentService', () => {
  let service: ApointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
