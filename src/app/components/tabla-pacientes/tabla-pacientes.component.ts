import { PacientesService } from './../../services/pacientes/pacientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-pacientes',
  templateUrl: './tabla-pacientes.component.html',
  styleUrls: ['./tabla-pacientes.component.css']
})
export class TablaPacientesComponent implements OnInit {

  constructor(private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  private async obtenerPacientes(){
    try{
      const response = await this.pacientesService.obtenerPacientes();
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

}
