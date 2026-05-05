import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio';
import { DestinosComponent } from './componentes/destinos/destinos';
import { ContactoComponent } from './componentes/contacto/contacto';
import { LoginComponent } from './componentes/login/login';
import { RegisterComponent } from './componentes/register/register';
import { AboutusComponent } from './aboutus/aboutus';
import { PaymentComponent } from './componentes/payment/payment';
import { DestinationDetailComponent } from './destination-detail/destination-detail';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'destination/:id', component: DestinationDetailComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
