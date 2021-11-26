import { PacienteModel } from './../../models/paciente';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }

  public obtenerPacientes(): Promise<any>{
    console.log('entra al servicio')
    const url = `${environment.apiUrl}/obtenerPacientes`;
    return this.http.get(url).toPromise();
  }
  public obtenerPaciente(id: number){}

  public agregarPaciente(paciente: any): Promise<any>{
    const url = `${environment.apiUrl}/agregarPaciente`;
    return this.http.post(url, paciente).toPromise();
  }
  public actualizarPaciente(paciente: PacienteModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarPaciente/${paciente.idPac}`;
    return this.http.put(url, paciente).toPromise();
  }

  public eliminarPaciente(id:number): Promise<any>{
    return this.http.delete(`${environment.apiUrl}/eliminarPaciente/${id}`).toPromise();
  }
}
