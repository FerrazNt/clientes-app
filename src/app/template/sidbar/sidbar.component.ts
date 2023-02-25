import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})

export class SidbarComponent implements OnInit{

  usuarioLogado!: string;

  constructor(private autthService: AuthService,
              private router: Router){

  }

  ngOnInit(){
   this.usuarioLogado = this.autthService.getUsuarioAutenticado();
  }

  sair(){
    this.autthService.encerrarSessao();
    this.router.navigate(['/login']);
  }

}
