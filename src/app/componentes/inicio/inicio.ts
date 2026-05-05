import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinationService, Destination } from '../../destination';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent implements OnInit {
  featuredDestinations: Destination[] = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe({
      next: (data) => {
        this.featuredDestinations = this.getFeaturedDestinations(data);
      },
      error: (err) => {
        console.error('Error al cargar destinos destacados:', err);
      }
    });
  }

  private getFeaturedDestinations(destinations: Destination[]): Destination[] {
    const categories = ['Europa', 'Asia', 'América'];

    return categories
      .map(category => {
        return destinations
          .filter(destination => destination.category === category)
          .sort((a, b) => b.price - a.price)[0];
      })
      .filter(Boolean) as Destination[];
  }
}
