import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanzibarComponent } from './zanzibar.component';

describe('ZanzibarComponent', () => {
  let component: ZanzibarComponent;
  let fixture: ComponentFixture<ZanzibarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZanzibarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZanzibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
