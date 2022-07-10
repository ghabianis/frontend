import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDocsComponent } from './users-docs.component';

describe('UsersDocsComponent', () => {
  let component: UsersDocsComponent;
  let fixture: ComponentFixture<UsersDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
