import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenAcademicFormComponent } from './children-academic-form.component';

describe('ChildrenAcademicFormComponent', () => {
  let component: ChildrenAcademicFormComponent;
  let fixture: ComponentFixture<ChildrenAcademicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildrenAcademicFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildrenAcademicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
