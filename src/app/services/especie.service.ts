import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especie } from '../interfases/especie';

@Injectable({
  providedIn: 'root'
})
export class EspecieService {
  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }
  getall(): Observable<any> {
    return this.servicio.get(`${this.servidor}/especie/all`);
  }

  create(x: Especie) {
    return this.servicio.post<Especie>(`${this.servidor}/especie/save`, x);
  }

  update(especie : Especie){
    return this.servicio.put<Especie>(`${this.servidor}/especie/update`, especie.idespecie);
  }
  delete(id: number): Observable<any> {
    return this.servicio.get(`${this.servidor}/especie/delete/${id}`);
  }
}
