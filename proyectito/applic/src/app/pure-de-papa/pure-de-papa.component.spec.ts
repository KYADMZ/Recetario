import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureDePapaComponent } from './pure-de-papa.component';

describe('PureDePapaComponent', () => {
  let component: PureDePapaComponent;
  let fixture: ComponentFixture<PureDePapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureDePapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PureDePapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
