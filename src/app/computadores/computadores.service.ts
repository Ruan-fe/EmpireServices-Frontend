import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Computadores} from './Computadores'

@Injectable({
  providedIn: 'root'
})
export class ComputadoresService {

  constructor(private http: HttpClient) {}

  listarTodos():Observable<Computadores[]>{
      return this.http.get<Computadores[]>('http://localhost:8080/computadores');
  }
  salvar(computadores: Computadores):Observable<Computadores>{
    return this.http.post<Computadores>('http://localhost:8080/computadores',computadores);
  }
  deletar(idComputador: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/computadores/${idComputador}`);
  }

}
