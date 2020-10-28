import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Servicos } from './Servicos';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  listarTodos():Observable<Servicos[]>{
    return this.http.get<Servicos[]>('http://localhost:8080/servicos');
}
}
