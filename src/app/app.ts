import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Importamos las herramientas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // ¡ESTA LÍNEA ES LA CLAVE!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Viajes Mundo';
}
