import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersProfileFormComponent } from './teachers-profile-form.component';

describe('TeachersProfileFormComponent', () => {
  let component: TeachersProfileFormComponent;
  let fixture: ComponentFixture<TeachersProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachersProfileFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
