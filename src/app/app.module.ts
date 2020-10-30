import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { ComputadoresModule } from './computadores/computadores.module';
import {ComputadoresService} from './computadores/computadores.service'
import {LaboratoriosModule } from './laboratorios/laboratorios.module';
import { ServicosModule } from './servicos/servicos.module';
import {UsuariosModule} from './usuarios/usuarios.module';
import {LoginModule } from './login/login.module';
import { LayoutComponent } from './layout/layout.component'
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    ComputadoresModule,
    LaboratoriosModule,
    ServicosModule,
    UsuariosModule,
    LoginModule

  ],
  providers: [ComputadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
