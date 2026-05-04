import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Destination {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  details: string;
}

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private dataUrl = 'assets/data/destinations.json';

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.dataUrl);
  }

  getDestination(id: number): Observable<Destination> {
    return this.http.get<Destination[]>(this.dataUrl).pipe(
      map(destinations => destinations.find(d => d.id === id)!)
    );
  }
}
