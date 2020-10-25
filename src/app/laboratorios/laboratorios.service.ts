import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboratorios } from './Laboratorios';
import { LaboratoriosListComponent } from './laboratorios-list/laboratorios-list.component';

@Injectable({
  providedIn: 'root'
})
export class LaboratoriosService {

  constructor(private http: HttpClient) { }

  listarTodos():Observable<Laboratorios[]>{
    return this.http.get<Laboratorios[]>('http://localhost:8080/laboratorios');
  }

  salvar(laboratorios: Laboratorios):Observable<Laboratorios>{
    return this.http.post<Laboratorios>('http://localhost:8080/laboratorios',laboratorios)
  }

  excluir(idLaboratorio: number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/laboratorios/${idLaboratorio}`);
  }
}
