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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaPacientesComponent,
    NotFoundComponent,
    TerapeutaComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
