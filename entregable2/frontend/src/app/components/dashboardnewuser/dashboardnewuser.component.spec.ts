import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardnewuserComponent } from './dashboardnewuser.component';

describe('DashboardnewuserComponent', () => {
  let component: DashboardnewuserComponent;
  let fixture: ComponentFixture<DashboardnewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardnewuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardnewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
