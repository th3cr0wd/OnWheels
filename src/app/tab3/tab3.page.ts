import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  distance: number = 0;
  consumption: number = 0;
  fuelPrice: number = 0;
  returnTrip: boolean = false;

  totalDistance: number = 0;
  totalFuel: number = 0;
  totalCost: number = 0;

  calculate() {
    if (this.distance <= 0 || this.consumption <= 0 || this.fuelPrice <= 0) {
      alert('Vyplňte všechna pole s platnými hodnotami.');
      return;
    }

    this.totalDistance = this.returnTrip ? this.distance * 2 : this.distance;
    this.totalFuel = (this.totalDistance * this.consumption) / 100;
    this.totalCost = this.totalFuel * this.fuelPrice;
  }

  reset() {
    this.distance = 0;
    this.consumption = 0;
    this.fuelPrice = 0;
    this.returnTrip = false;

    this.totalDistance = 0;
    this.totalFuel = 0;
    this.totalCost = 0;
  }
}