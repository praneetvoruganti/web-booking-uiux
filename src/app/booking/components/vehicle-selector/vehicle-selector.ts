import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-selector',
  imports: [],
  templateUrl: './vehicle-selector.html',
  styleUrl: './vehicle-selector.scss'
})
export class VehicleSelector {
  selectedVehicle: string = 'Mini';

  selectVehicle(vehicle: string) {
    this.selectedVehicle = vehicle;
  }
}
