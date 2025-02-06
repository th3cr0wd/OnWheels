import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  trips: any[] = [];
  trip1: any = null;
  trip2: any = null;
  result: string = '';

  constructor(private storageService: StorageService) {
    this.loadTrips();
  }

  loadTrips() {
    this.trips = this.storageService.getTrips().map(trip => ({
      ...trip,
      formattedDate: this.formatDate(trip.date)
    }));
  }

  compareTrips() {
    if (!this.trip1 || !this.trip2) {
      this.result = 'Vyberte obě cesty.';
      return;
    }

    const speedComparison = this.trip1.speed > this.trip2.speed
      ? `${this.trip1.from} → ${this.trip1.to} byla rychlejší než ${this.trip2.from} → ${this.trip2.to}.`
      : `${this.trip2.from} → ${this.trip2.to} byla rychlejší.`;

    const fuelComparison = this.trip1.fuelConsumption < this.trip2.fuelConsumption
      ? `Měla lepší spotřebu než ${this.trip2.from} → ${this.trip2.to}.`
      : `Měla horší spotřebu.`;

    this.result = `${speedComparison} ${fuelComparison}`;
  }

  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  }
}
