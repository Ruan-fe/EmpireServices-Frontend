import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputadoresListComponent } from './computadores-list/computadores-list.component';
import { PoTableModule,PoModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ComputadoresListComponent],
  imports: [
    CommonModule,
    PoTableModule,
    PoPageDynamicSearchModule,
    HttpClientModule,
    PoModule
  ],
  exports: [
    ComputadoresListComponent
  ]
})
export class ComputadoresModule { }
