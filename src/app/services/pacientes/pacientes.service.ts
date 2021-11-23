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
  public agregarPaciente(paciente: any){}
  public actualizarPaciente(paciente: any){}
  public eliminarPaciente(id:number){}
}
