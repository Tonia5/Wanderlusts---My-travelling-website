import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DubrovnikComponent } from './dubrovnik.component';

describe('DubrovnikComponent', () => {
  let component: DubrovnikComponent;
  let fixture: ComponentFixture<DubrovnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DubrovnikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DubrovnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
