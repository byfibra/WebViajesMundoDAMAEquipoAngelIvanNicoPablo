import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio';
import { DestinosComponent } from './componentes/destinos/destinos';
import { ContactoComponent } from './componentes/contacto/contacto';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
