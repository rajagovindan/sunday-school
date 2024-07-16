import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenProfileComponent } from './children-profile.component';

describe('ChildrenProfileComponent', () => {
  let component: ChildrenProfileComponent;
  let fixture: ComponentFixture<ChildrenProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildrenProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildrenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
