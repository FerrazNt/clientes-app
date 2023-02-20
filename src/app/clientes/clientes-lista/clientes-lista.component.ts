import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private service: ClientesService,
              private router: Router) { 

  }

  ngOnInit(): void {
      this
        .service
        .buscarClientes()
        .subscribe(resposta => this.clientes = resposta);
  }

  public irParaNovoCadastro(id: number){
    if (id){
      this.router.navigate(['/clientes-form/'+id]);
    }else{
      this.router.navigate(['/clientes-form']);
    }
  }
}
