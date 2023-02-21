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
  clienteSelecionado!: Cliente;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(private service: ClientesService,
              private router: Router) { 

  }

  ngOnInit(): void {
      this
        .service
        .buscarClientes()
        .subscribe(resposta => this.clientes = resposta);
  }

  preparaDelete(deleteClie: Cliente){
    this.clienteSelecionado = deleteClie;
  }

  deletarCliente(){
    if (this.clienteSelecionado){
      this.service
      .deletarCliente(this.clienteSelecionado)
      .subscribe(
          response => {
                        this.mensagemSucesso = 'Cliente excluído com sucesso!',
                        this.ngOnInit()
                      },
          erro => this.mensagemErro = 'Ocorreu um ao tentar excluir o Cliente.'
        );
    }
    
  }

}
