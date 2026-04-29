import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer'; // Importamos las herramientas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Navbar, Footer], // ¡ESTA LÍNEA ES LA CLAVE!
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'Viajes Mundo';
}
