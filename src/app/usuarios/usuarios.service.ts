import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuarios} from './Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
  
  listarTodos(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>('http://localhost:8080/usuarios')
  }

  salvarUsuario(usuarios : Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>('http://localhost:8080/usuarios', usuarios)
  }

  excluir(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/usuarios/${id}`)
  }
}
