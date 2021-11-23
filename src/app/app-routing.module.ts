import { PacientesComponent } from './components/pacientes/pacientes.component';
import { TerapeutaComponent } from './components/terapeuta/terapeuta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaPacientesComponent } from './components/tabla-pacientes/tabla-pacientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pacientes', component: PacientesComponent},
  {path: 'terapeuta', component: TerapeutaComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
