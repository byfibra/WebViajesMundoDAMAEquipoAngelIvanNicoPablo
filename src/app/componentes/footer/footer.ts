import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  isAuthPage = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Remover el margen del footer en login y register
      // Usamos event.urlAfterRedirects para mayor precisión
      const url = event.urlAfterRedirects || event.url;
      const authRoutes = ['/login', '/register'];
      this.isAuthPage = authRoutes.some(route => url.includes(route));
    });
  }
}
