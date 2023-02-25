import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: "servicos", component: LayoutComponent, children: [
    {path: "lista", component: ServicoPrestadoListaComponent},
    {path: "form", component: ServicoPrestadoFormComponent},
    {path: "form/:id", component: ServicoPrestadoFormComponent},
    { path: '', redirectTo: '/servicos/lista', pathMatch: 'full' }
  ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
