import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  host: { '[class.login]': 'isAuthPage', 'class': 'pt-5 pb-3' }
})
export class Footer {
  isAuthPage = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Remover el margen del footer en login y register
      const authRoutes = ['/login', '/register'];
      this.isAuthPage = authRoutes.includes(event.url);
    });
  }
}
