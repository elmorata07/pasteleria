import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcensoComponent } from './dashboardcenso.component';

describe('DashboardcensoComponent', () => {
  let component: DashboardcensoComponent;
  let fixture: ComponentFixture<DashboardcensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardcensoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardcensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
