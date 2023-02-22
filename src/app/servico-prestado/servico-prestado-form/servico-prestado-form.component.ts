import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../../clientes/cliente';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  

  constructor(private clienteService: ClientesService,
              private service: ServicoPrestadoService ) {
    this.servico = new ServicoPrestado;
   }

  ngOnInit(): void {
    this.clienteService
      .buscarClientes()
      .subscribe(
        response => this.clientes =  response
      );
  }

  onSubimit(){
    this
      .service
      .salvar(this.servico)
      .subscribe(
        response => console.log(response)
      )
  }

}
