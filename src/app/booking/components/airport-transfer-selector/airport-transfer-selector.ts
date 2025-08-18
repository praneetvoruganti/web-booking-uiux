import { Component } from '@angular/core';

@Component({
  selector: 'app-airport-transfer-selector',
  imports: [],
  templateUrl: './airport-transfer-selector.html',
  styleUrl: './airport-transfer-selector.scss'
})
export class AirportTransferSelector {
  selectedTransfer: string = 'To Airport';

  selectTransfer(transferType: string) {
    this.selectedTransfer = transferType;
  }
}
