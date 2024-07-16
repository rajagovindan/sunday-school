import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenProfileFormComponent } from './children-profile-form.component';

describe('ChildrenProfileFormComponent', () => {
  let component: ChildrenProfileFormComponent;
  let fixture: ComponentFixture<ChildrenProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildrenProfileFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildrenProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
