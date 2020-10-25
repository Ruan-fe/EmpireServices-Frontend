import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosListComponent } from './servicos-list/servicos-list.component';


@NgModule({
  declarations: [ServicosListComponent],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
