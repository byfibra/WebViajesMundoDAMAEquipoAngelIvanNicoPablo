import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { DestinosComponent } from './destinos/destinos';
import { ContactoComponent } from './contacto/contacto';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
