import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumisakComponent } from './numisak.component';

describe('NumisakComponent', () => {
  let component: NumisakComponent;
  let fixture: ComponentFixture<NumisakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumisakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumisakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
