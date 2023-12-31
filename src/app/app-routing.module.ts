import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { RegistrarDiagnosticoComponent } from './registrar-diagnostico/registrar-diagnostico.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: 'registrar-diagnostico', component: RegistrarDiagnosticoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
