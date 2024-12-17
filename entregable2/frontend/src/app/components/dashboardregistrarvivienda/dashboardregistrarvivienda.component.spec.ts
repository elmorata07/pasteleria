import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardregistrarviviendaComponent } from './dashboardregistrarvivienda.component';

describe('DashboardregistrarviviendaComponent', () => {
  let component: DashboardregistrarviviendaComponent;
  let fixture: ComponentFixture<DashboardregistrarviviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardregistrarviviendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardregistrarviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
