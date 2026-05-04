import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinationService, Destination } from '../../destination';

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destinos.html',
  styleUrl: './destinos.css'
})
export class DestinosComponent implements OnInit {
  destinations: Destination[] = [];
  categories = ['Todos', 'Europa', 'Asia', 'América', 'África'];
  selectedCategory = 'Todos';

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe({
      next: (data) => {
        this.destinations = data;
      },
      error: (err) => {
        console.error('Error al cargar destinos:', err);
      }
    });
  }

  get filteredDestinations(): Destination[] {
    return this.selectedCategory === 'Todos'
      ? this.destinations
      : this.destinations.filter(destination => destination.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}

