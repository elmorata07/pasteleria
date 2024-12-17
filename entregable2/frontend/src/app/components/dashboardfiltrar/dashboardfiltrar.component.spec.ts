import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfiltrarComponent } from './dashboardfiltrar.component';

describe('DashboardfiltrarComponent', () => {
  let component: DashboardfiltrarComponent;
  let fixture: ComponentFixture<DashboardfiltrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardfiltrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardfiltrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
