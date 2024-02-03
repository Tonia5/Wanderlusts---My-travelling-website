import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenerifeComponent } from './tenerife.component';

describe('TenerifeComponent', () => {
  let component: TenerifeComponent;
  let fixture: ComponentFixture<TenerifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenerifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenerifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
