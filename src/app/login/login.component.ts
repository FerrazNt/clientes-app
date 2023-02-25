import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginErro!: boolean;
  erroMensagem: string[] = [];
  mensagemSucesso!: string;
  cadastrando!: boolean;

  usuario!: Usuario;

  constructor(private router: Router,
              private auth: AuthService) { }

  onSubmit(){
    this.erroMensagem= [];
    this.mensagemSucesso = "";
    let isEmailValido: boolean = this.validarEmail(this.username);
    if (this.username == null || this.password == null){
      this.loginErro = true;
      this.erroMensagem.push("Preencha todos os campos para efetuar o Login.");
    }else if (isEmailValido) {
      // Criando um Sbscribe da nova forma: Se atentar para essa forna
       this.auth.login(this.username, this.password)
                .subscribe({
                  next: (r) => {
                    const access_token = JSON.stringify(r);
                    localStorage.setItem('access_token', access_token);
                    this.router.navigate(['/home']);
                  }, 
                  error: (e) => {
                   if ( e.status == "401"){
                    this.erroMensagem = ["ATENÇÃO: Falha ao conectar. Favor entrar em contato com o suporte."];
                    
                   }else {
                    this.erroMensagem = ['Usuário e/ou senha incorretos.'];
                   }
                  }
              }); 
    }else{
      this.loginErro = true;
      this.erroMensagem.push("O Login é deve ser um E-Mail válido.");
    } 
  }

  preparaCadastrar(event: { preventDefault: () => void; }){
    event.preventDefault();    
    this.cadastrando = true;
  }

  cacnelaCadastrar(){ 
    this.cadastrando = false;
  }

  validarEmail(email: string){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  cadastrar(){
    this.erroMensagem =  [];
    this.mensagemSucesso = "";
    let isEmailValido: boolean = this.validarEmail(this.username);
    if (this.username == null || this.password == null){
      this.loginErro = true;
      this.erroMensagem.push("Preencha todos os campos para efetuar o cadastro.");
    }else if (isEmailValido){
      const usuario: Usuario = new Usuario();
      usuario.username = this.username;
      usuario.password = this.password;
      this.auth
            .salvar(usuario)
            .subscribe({
              next: (r) => {
                this.mensagemSucesso = "Cadastro de Novo Usuário Realizado com Sucesso."
                this.cadastrando = false;
                this.username = "";
                this.password = "";
              }, 
              error: (e) =>  {
                if(e.status == "400"){
                  this.loginErro = true;
                  console.log(e);
                  this.erroMensagem = e.error.errors;
                }else if(e.status == "401"){
                  this.loginErro = true;
                  console.log(e);
                  this.erroMensagem = ["ATENÇÃO: Falha ao conectar. Favor entrar em contato com o suporte."];
                }else{
                  this.erroMensagem = ["ATENÇÃO: Falha ao conectar. Favor entrar em contato com o suporte."];
                }
              }
            });
      }else{
        this.loginErro = true;
        this.erroMensagem.push("Fovor fornecer um e-mail válido.");
      }
  }


}
