import { ErrorComponent } from './components/error/error.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { TerapeutaComponent } from './components/terapeuta/terapeuta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaPacientesComponent } from './components/tabla-pacientes/tabla-pacientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'pacientes', component: PacientesComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'terapeuta', component: TerapeutaComponent},
  {path: '', component: InicioComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
