import { PacientesService } from './services/pacientes/pacientes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaPacientesComponent } from './components/tabla-pacientes/tabla-pacientes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TerapeutaComponent } from './components/terapeuta/terapeuta.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioPacienteComponent } from './components/formulario-paciente/formulario-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaPacientesComponent,
    NotFoundComponent,
    TerapeutaComponent,
    PacientesComponent,
    InicioComponent,
    ErrorComponent,
    FormularioPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
