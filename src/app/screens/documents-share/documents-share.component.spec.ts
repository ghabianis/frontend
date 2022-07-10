import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsShareComponent } from './documents-share.component';

describe('DocumentsShareComponent', () => {
  let component: DocumentsShareComponent;
  let fixture: ComponentFixture<DocumentsShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
