import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: "clientes", component: LayoutComponent, children: [
    { path: 'lista', component: ClientesListaComponent },
    { path: 'form', component: ClientesFormComponent },
    { path: 'form/:id', component: ClientesFormComponent },
    { path: '', redirectTo: '/clientes/lista', pathMatch: 'full' }

  ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
