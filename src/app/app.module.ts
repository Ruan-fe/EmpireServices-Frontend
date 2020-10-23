import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { ComputadoresModule } from './computadores/computadores.module';
import {ComputadoresService} from './computadores/computadores.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    ComputadoresModule
  ],
  providers: [ComputadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
