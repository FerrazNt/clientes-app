import { Component } from '@angular/core';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
  cliente: Cliente;
  sucesso: boolean = false;
  erros: String[] | undefined;

  constructor( private service : ClientesService,
               private router : Router ){
    this.cliente = new Cliente();
  }

  onSubmit(){
    this
      .service
      .salvarCliente(this.cliente)
      .subscribe(response => {
        console.log(response);
        this.erros = [];
        this.cliente.id = response.id;
        this.cliente.dataCadastro= response.dataCadastro;
        this.sucesso=true;
      },errorResponse => {
          this.sucesso = false;
          this.erros = errorResponse.error.errors;
        }
      );      
  }

  irParaLista(){
    this.router.navigate(['/clientes']);
  }

  ngOnInit(): void {
  
  }

}
