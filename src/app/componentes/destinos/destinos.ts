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

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe(data => {
      this.destinations = data;
    });
  }
}
