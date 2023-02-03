import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Amo} from '../interfases/amo';


@Injectable({
  providedIn: 'root'
})
export class AmoService {

  servidor = 'http://localhost:8080/api';
  constructor(private servicio: HttpClient) { }
  getall(): Observable<any> {
    return this.servicio.get(`${this.servidor}/amo/all`);
  }

  create( x: Amo) {
    return this.servicio.post<Amo>(`${this.servidor}/amo/save`,x);
  }

  update(amo : Amo){
    return this.servicio.put<Amo>(`${this.servidor}/amo/update`, amo);
  }

  delete(id: number): Observable<any> {
    return this.servicio.get(`${this.servidor}/amo/delete/${id}`);
  }





}
