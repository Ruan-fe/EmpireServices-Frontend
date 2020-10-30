import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuarios} from './Usuarios';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
  
  listarTodos(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(environment.API_URL+'usuarios')
  }

  salvarUsuario(usuarios : Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(environment.API_URL+'usuarios', usuarios)
  }

  excluir(id: number): Observable<any>{
    return this.http.delete<any>(environment.API_URL+`usuarios/${id}`)
  }
}
