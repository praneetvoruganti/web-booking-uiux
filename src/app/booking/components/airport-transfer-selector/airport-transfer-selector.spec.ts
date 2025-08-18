import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportTransferSelector } from './airport-transfer-selector';

describe('AirportTransferSelector', () => {
  let component: AirportTransferSelector;
  let fixture: ComponentFixture<AirportTransferSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportTransferSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportTransferSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
