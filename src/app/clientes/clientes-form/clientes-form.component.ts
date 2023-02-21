import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

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
               private router : Router, 
               private activatedRouter: ActivatedRoute){
    this.cliente = new Cliente();
  }

  onSubmit(){
    if (this.cliente.id){
      this
      .service
      .atualizarCliente(this.cliente)
      .subscribe(response => {
        this.erros = [];
          this.sucesso=true;
      },errorResponse => {
          this.sucesso = false;
          this.erros = ['Erro ao Atualzar o Cliente'];
        }
      );
    }else{
      this
      .service
      .salvarCliente(this.cliente)
      .subscribe(response => {
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
        
  }

  irParaLista(){
    this.router.navigate(['/clientes']);
  }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    if (id){
      this
        .service
        .buscarClientesPorId(id)
        .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()  
          );        
    }else{
      null;
    }
  }

}
