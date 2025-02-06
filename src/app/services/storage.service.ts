import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private STORAGE_KEY = 'trips';

  constructor() {}

  getTrips(): any[] {
    const storedTrips = localStorage.getItem(this.STORAGE_KEY);
    return storedTrips ? JSON.parse(storedTrips) : [];
  }

  saveTrip(trip: any): void {
    const trips = this.getTrips();
    trips.push(trip);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trips));
  }

  deleteTrip(trip: any): void {
    let trips = this.getTrips();
    trips = trips.filter(t => JSON.stringify(t) !== JSON.stringify(trip)); 
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trips)); 
  }
  

  clearTrips(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

