import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase+'/api/clientes';

  constructor(private http: HttpClient ) { 
    
  }

  salvarCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}/novo`, cliente);
  }

  atualizarCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  buscarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiURL);
  }

  buscarClientesPorId(id: string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiURL}/${id}`);
  }

  deletarCliente(clinete: Cliente): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${clinete.id}`);
  }

}