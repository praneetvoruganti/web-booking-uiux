import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideTypeSelector } from './ride-type-selector';

describe('RideTypeSelector', () => {
  let component: RideTypeSelector;
  let fixture: ComponentFixture<RideTypeSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideTypeSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideTypeSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
