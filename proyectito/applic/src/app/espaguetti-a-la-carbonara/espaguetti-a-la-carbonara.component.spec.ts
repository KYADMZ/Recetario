import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaguettiALaCarbonaraComponent } from './espaguetti-a-la-carbonara.component';

describe('EspaguettiALaCarbonaraComponent', () => {
  let component: EspaguettiALaCarbonaraComponent;
  let fixture: ComponentFixture<EspaguettiALaCarbonaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaguettiALaCarbonaraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspaguettiALaCarbonaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
