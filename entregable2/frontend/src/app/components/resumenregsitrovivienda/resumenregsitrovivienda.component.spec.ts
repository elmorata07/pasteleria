import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenregsitroviviendaComponent } from './resumenregsitrovivienda.component';

describe('ResumenregsitroviviendaComponent', () => {
  let component: ResumenregsitroviviendaComponent;
  let fixture: ComponentFixture<ResumenregsitroviviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenregsitroviviendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenregsitroviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
