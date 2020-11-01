import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Servicos } from './Servicos';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  listarTodos():Observable<Servicos[]>{
    return this.http.get<Servicos[]>(environment.API_URL+'/servicos');
}
listarComFiltroStatusP(status: string):Observable<Servicos[]>{
  return this.http.get<Servicos[]>(environment.API_URL+`/servicos?status=${status}`)
}
listarComFiltroStatusC(status: string):Observable<Servicos[]>{
  return this.http.get<Servicos[]>(environment.API_URL+`/servicos?status=${status}`)
}
listarComputadoresFiltroPorIdLab(idLaboratorio: string):Observable<Servicos[]>{
  return this.http.get<Servicos[]>(environment.API_URL+`/servicos?status=${status}`)
}

salvarServico(servico: Servicos):Observable<Servicos>{
  return this.http.post<Servicos>(environment.API_URL+'/servicos',servico)
}
}
