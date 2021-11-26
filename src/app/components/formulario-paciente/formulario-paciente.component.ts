import { PacienteModel } from './../../models/paciente';
import { Router } from '@angular/router';
import { PacientesService } from './../../services/pacientes/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.css']
})
export class FormularioPacienteComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public pacienteActualizar: PacienteModel | null = null;

  constructor(private formBuilder: FormBuilder, private pacientesService: PacientesService, private router: Router) { }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('actualizarPaciente');
    this.pacienteActualizar = actualizar ? JSON.parse(actualizar) : null;
    this.buildForm();
  }
  public buildForm(){
    this.formGroup = this.formBuilder.group({
      nomPac: [this.pacienteActualizar?.nomPac, Validators.required],
      Edad: [this.pacienteActualizar?.Edad, Validators.required],
      EmailPac: [this.pacienteActualizar?.EmailPac, Validators.required]
    });
  }

  public agregarPaciente(){
      this.pacientesService.agregarPaciente(this.formGroup.value).then(response => {
      alert('Paciente agregado correctamente');
      this.router.navigate(['/pacientes']);
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

  public actualizarPaciente(){
    const paciente: PacienteModel = {
      idPac: this.pacienteActualizar?.idPac,
      ...this.formGroup.value
    }
    this.pacientesService.actualizarPaciente(paciente).then(response => {
      if(response.message === 'updated'){
        alert('Paciente actualizado correctamente');
        this.router.navigate(['/pacientes']);
      }
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

}
