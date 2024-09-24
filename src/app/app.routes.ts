import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { UsuariosComponent } from './Views/usuarios/usuarios.component';
import { ReservasComponent } from './Views/reservas/reservas.component';
import { VuelosComponent } from './Views/vuelos/vuelos.component';
import { ContactoComponent } from './Views/contacto/contacto.component';
import { RegistrateComponent } from './Views/registrate/registrate.component';
import { LoginComponent } from './Views/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'User', component: UsuariosComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'Vuelos', component: VuelosComponent },
  { path: 'Contacto', component: ContactoComponent },
  { path: 'Registrate', component: RegistrateComponent },
  { path: 'Login', component: LoginComponent },

];
