import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInformation } from './customer-information';

describe('CustomerInformation', () => {
  let component: CustomerInformation;
  let fixture: ComponentFixture<CustomerInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
