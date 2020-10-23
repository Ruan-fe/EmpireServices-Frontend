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
}
