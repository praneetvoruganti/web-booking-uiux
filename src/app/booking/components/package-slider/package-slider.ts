import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package-slider',
  templateUrl: './package-slider.html',
  styleUrls: ['./package-slider.scss'],
  imports: [CommonModule]
})
export class PackageSlider {
  packages = ['2h/20km', '4h/40km', '6h/60km', '8h/80km', '10h/100km'];
  selectedPackageIndex = 0;

  onPackageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedPackageIndex = parseInt(inputElement.value, 10);
  }

  get selectedPackageDescription(): string {
    return this.packages[this.selectedPackageIndex];
  }
}
