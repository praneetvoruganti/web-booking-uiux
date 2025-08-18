import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ride-type-selector',
  templateUrl: './ride-type-selector.html',
  styleUrls: ['./ride-type-selector.scss']
})
export class RideTypeSelector {
  selectedRideType: string = 'Schedule';
  @Output() rideTypeSelected = new EventEmitter<string>();

  selectRideType(rideType: string) {
    this.selectedRideType = rideType;
    this.rideTypeSelected.emit(this.selectedRideType);
  }
}
