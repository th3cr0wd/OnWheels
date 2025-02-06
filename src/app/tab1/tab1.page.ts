import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  trip = {
    date: '',
    from: '',
    to: '',
    distance: 0,
    duration: 0,
    speed: 0,
    fuelConsumption: 0
  };

  trips: any[] = [];

  constructor(private storageService: StorageService) {
    this.loadTrips();
  }

  loadTrips() {
    this.trips = this.storageService.getTrips().map(trip => ({
      ...trip,
      formattedDate: this.formatDate(trip.date),
      formattedDuration: this.formatDuration(trip.duration)
    }));
  }

  saveTrip() {
    if (!this.trip.date || !this.trip.from || !this.trip.to || this.trip.distance <= 0) {
      alert('Vyplňte všechna pole.');
      return;
    }

    this.storageService.saveTrip({ ...this.trip });
    this.loadTrips(); 

    this.trip = { date: '', from: '', to: '', distance: 0, duration: 0, speed: 0, fuelConsumption: 0 };
  }

  deleteTrip(trip: any) {
    this.storageService.deleteTrip(trip);
    this.loadTrips(); 
  }
  

  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  }

  formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hod ${remainingMinutes} min`;
  }
}
