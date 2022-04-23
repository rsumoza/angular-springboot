import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {

  personaURL = 'http://localhost:8080/persona/';

  constructor(private httpCliente: HttpClient ) { }

  public lista(): Observable<Persona[]>{
    return this.httpCliente.get<Persona[]>(this.personaURL+'ver/personas');
  }

  public mostrarPersona(id:number): Observable <Persona>{
    return this.httpCliente.get<Persona>(this.personaURL+`obtener/persona/${id}`);
  }

  public crearPersona(persona:Persona):Observable<any>{
    return this.httpCliente.post<any>(this.personaURL+'crear',persona);
  }

  public actualizarPersona(id:number, persona:Persona):Observable<any>{
    return this.httpCliente.put<any>(this.personaURL+`actualizar/${id}`,persona);
  }

  public borrarPersona(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.personaURL+`borrar/${id}`);
  }
}
