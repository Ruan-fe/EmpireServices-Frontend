import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComputadoresListComponent } from './computadores/computadores-list/computadores-list.component';
import { LaboratoriosListComponent } from './laboratorios/laboratorios-list/laboratorios-list.component'
import { ServicosListComponent } from './servicos/servicos-list/servicos-list.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';

const routes: Routes = [
  
  {path:'computadores',component:ComputadoresListComponent},
  {path:'laboratorios',component:LaboratoriosListComponent},
  {path:'servicos',component:ServicosListComponent},
  {path:'usuarios',component:UsuariosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
