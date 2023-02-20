import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  

  constructor(private http: HttpClient ) { 
    
  }

  salvarCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes/novo', cliente);
  }

  buscarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  buscarClientesPorId(id: string): Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8080/api/clientes/'+id);
  }

}