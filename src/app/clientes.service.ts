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

  atualizarCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  buscarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  buscarClientesPorId(id: string): Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8080/api/clientes/${id}`);
  }

  deletarCliente(clinete: Cliente): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/clientes/${clinete.id}`);
  }

}