import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CappadociaComponent } from './cappadocia.component';

describe('CappadociaComponent', () => {
  let component: CappadociaComponent;
  let fixture: ComponentFixture<CappadociaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CappadociaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CappadociaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
