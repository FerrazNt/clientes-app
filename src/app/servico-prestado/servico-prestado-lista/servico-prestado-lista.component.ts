import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome!: string; 
  mes!: string;
  meses: string [];
  lista!: ServicoPrestadoBusca[];
  listaVazia: boolean = true;

  constructor(private service: ServicoPrestadoService) { 
    this.meses = ['01','02','03','04','05','06','07','08','09','10','11','12'] ;
  }

  ngOnInit(): void {
  }

  consultar(){
    this
      .service
      .buscar(this.nome, this.mes)
      .subscribe(
        response => {
          this.lista = response;
          if(this.lista.length > 0){
            this.listaVazia = false;
          }
        }
        );
    }

}
