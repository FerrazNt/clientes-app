import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';

const routes: Routes = [
  {path: "servicos", component: ServicoPrestadoListaComponent},
  {path: "servicos-form", component: ServicoPrestadoFormComponent},
  {path: "servicos-form/:id", component: ServicoPrestadoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
