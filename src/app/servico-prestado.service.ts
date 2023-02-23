import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { environment } from '../environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase+'/api/servicos-prestado';

  constructor(private http: HttpClient) {
       
  }

  salvar(servicoPrestador: ServicoPrestado): Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(`${this.apiURL}/novo`, servicoPrestador);
  }

  buscar(nome: string, mes: string): Observable<ServicoPrestadoBusca[]>{
    if (!nome){
      nome = "";
    }

    if(!mes){
      mes = '00';
    }

    const httpParams = new HttpParams().set("nome", nome).set("mes", mes);
    
    const url = this.apiURL + "/buscar?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }

}
