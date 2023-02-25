import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios";
  tokenUrl: string = environment.apiURLBase + environment.obterTokenUrl;
  clientID: string = environment.clientID;
  clientSecret: string = environment.clientSecret;

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.apiURL+"/novo",usuario);
  }

  login(username: string, password: string): Observable<any>{
    const params = new HttpParams()
                          .set("username",username)
                          .set("password",password)
                          .set("grant_type", 'password');
                          
    const headers = {
      // O Professor usou a função btoa para converter a string de autorização, contudo essa função 
      // está deprecada, então pesquisei e substitui por Buffer.from(string).toString('base64')
      'Authorization': 'Basic '+ btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post<any>(this.tokenUrl, params.toString(), { headers });
  }


}
