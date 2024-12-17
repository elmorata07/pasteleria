import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardregistropersonaComponent } from './dashboardregistropersona.component';

describe('DashboardregistropersonaComponent', () => {
  let component: DashboardregistropersonaComponent;
  let fixture: ComponentFixture<DashboardregistropersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardregistropersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardregistropersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
