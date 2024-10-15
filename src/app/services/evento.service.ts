import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../model/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient){}

  baseUrl : string = 'https://localhost:7089/Eventos'

  public getEvento (): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.baseUrl);
  }
  public getElementosByTema (tema : string): Observable<Evento[]>{
    return this.http.get<Evento[]>(`${this.baseUrl}/${tema}/tema`);
  }
  public getEventoById (id : number): Observable<Evento>{
    return this.http.get<Evento>(`${this.baseUrl}/${id}`);
  }

  

}
