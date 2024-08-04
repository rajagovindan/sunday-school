import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicDialogComponent } from './add-academic-dialog.component';

describe('AddAcademicDialogComponent', () => {
  let component: AddAcademicDialogComponent;
  let fixture: ComponentFixture<AddAcademicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAcademicDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAcademicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
