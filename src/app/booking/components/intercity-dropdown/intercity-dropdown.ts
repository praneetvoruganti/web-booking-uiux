import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intercity-dropdown',
  templateUrl: './intercity-dropdown.html',
  styleUrls: ['./intercity-dropdown.scss'],
  imports: [FormsModule, CommonModule]
})
export class IntercityDropdown {
  cities = [
    // Telangana
    'Hyderabad',
    'Warangal',
    'Nizamabad',
    'Karimnagar',
    'Ramagundam',
    // Andhra Pradesh
    'Visakhapatnam',
    'Vijayawada',
    'Guntur',
    'Nellore',
    'Tirupati'
  ];
  selectedCity: string = '';
  tripType: 'one-way' | 'return' = 'one-way';
  @Output() tripTypeChanged = new EventEmitter<'one-way' | 'return'>();

  selectTripType(type: 'one-way' | 'return') {
    this.tripType = type;
    this.tripTypeChanged.emit(this.tripType);
  }
}
