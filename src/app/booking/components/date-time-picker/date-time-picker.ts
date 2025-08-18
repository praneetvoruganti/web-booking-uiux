import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-time-picker',
  imports: [CommonModule],
  templateUrl: './date-time-picker.html',
  styleUrl: './date-time-picker.scss'
})
export class DateTimePicker {
  @Input() tripType: 'one-way' | 'return' = 'one-way';
  @Input() rideType: string = 'Schedule';
  selectedPeriod: 'AM' | 'PM' = 'AM';
  selectedReturnPeriod: 'AM' | 'PM' = 'AM';

  selectPeriod(period: 'AM' | 'PM') {
    this.selectedPeriod = period;
  }

  selectReturnPeriod(period: 'AM' | 'PM') {
    this.selectedReturnPeriod = period;
  }
}
