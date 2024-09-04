import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCounterCardComponent } from './dashboard-counter-card.component';

describe('DashboardCounterCardComponent', () => {
  let component: DashboardCounterCardComponent;
  let fixture: ComponentFixture<DashboardCounterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCounterCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCounterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
