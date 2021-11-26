import { PacienteModel } from './../../models/paciente';
import { PacientesService } from './../../services/pacientes/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-pacientes',
  templateUrl: './tabla-pacientes.component.html',
  styleUrls: ['./tabla-pacientes.component.css']
})
export class TablaPacientesComponent implements OnInit {

  public pacientes: PacienteModel[] = [];

  constructor(private pacientesService: PacientesService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    localStorage.clear();
    this.pacientes = await this.obtenerPacientes();
  }

  private async obtenerPacientes(): Promise<any>{
    try{
      const response = await this.pacientesService.obtenerPacientes();
      return response.data;
    }catch(error){
      this.router.navigate(['/error']);
    }
  }

  public eliminarPaciente(id: number){
    this.pacientesService.eliminarPaciente(id).then(async (response)=>{
      if(response.message === 'deleted'){
        this.pacientes = await this.obtenerPacientes();
        alert('Canción eliminada correctamente');
      }
    }).catch(error => {
      console.log(error);
    });
  }

  public irActualizarPaciente(paciente: PacienteModel){
    localStorage.setItem('actualizarPaciente', JSON.stringify(paciente));
    this.router.navigate(['/formulario-paciente']);
  }

}







