import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicuadoDeMangoComponent } from './licuado-de-mango.component';

describe('LicuadoDeMangoComponent', () => {
  let component: LicuadoDeMangoComponent;
  let fixture: ComponentFixture<LicuadoDeMangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicuadoDeMangoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicuadoDeMangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
