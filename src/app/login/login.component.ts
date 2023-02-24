import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginErro!: boolean;
  erroMensagem!: string;
  cadastrando!: boolean;

  constructor(private router: Router) { }

  onSubmit(){
    let isEmailValido: boolean = this.validarEmail(this.username);
    if (this.username == null || this.password == null){
      this.loginErro = true;
      this.erroMensagem = "Preencha todos os campos para efetuar o Login."
    }else{
      if (isEmailValido){
        console.log(`User: ${this.username}, Password: ${this.password}`);
        this.router.navigate(['/home']);  
      }else{
        this.loginErro = true;
        this.erroMensagem = "Você deve fornecer um email Válido."
      } 
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


}
