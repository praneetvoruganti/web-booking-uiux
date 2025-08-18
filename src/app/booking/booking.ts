import { Component } from '@angular/core';
import { RideTypeSelector } from './components/ride-type-selector/ride-type-selector';
import { LocationPicker } from './components/location-picker/location-picker';
import { DateTimePicker } from './components/date-time-picker/date-time-picker';
import { SearchButton } from './components/search-button/search-button';
import { VehicleSelector } from './components/vehicle-selector/vehicle-selector';
import { CustomerInformation } from './components/customer-information/customer-information';
import { CommonModule } from '@angular/common';
import { AirportTransferSelector } from './components/airport-transfer-selector/airport-transfer-selector';
import { PackageSlider } from './components/package-slider/package-slider';
import { IntercityDropdown } from './components/intercity-dropdown/intercity-dropdown';
import { BookingInfo } from './components/booking-info/booking-info';

@Component({
  selector: 'app-booking',
  imports: [
    CommonModule,
    RideTypeSelector,
    LocationPicker,
    DateTimePicker,
    VehicleSelector,
    CustomerInformation,
    AirportTransferSelector,
    SearchButton,
    PackageSlider,
    IntercityDropdown,
    BookingInfo
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
  selectedRideType: string = 'Schedule'; // Default ride type
  intercityTripType: 'one-way' | 'return' = 'one-way';

  onRideTypeSelected(rideType: string) {
    this.selectedRideType = rideType;
  }

  onIntercityTripTypeChanged(tripType: 'one-way' | 'return') {
    this.intercityTripType = tripType;
  }
}
