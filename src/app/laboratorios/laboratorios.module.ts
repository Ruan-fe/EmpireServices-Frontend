import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboratoriosRoutingModule } from './laboratorios-routing.module';
import { LaboratoriosListComponent } from './laboratorios-list/laboratorios-list.component';
import { PoModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [LaboratoriosListComponent],
  imports: [
    CommonModule,
    LaboratoriosRoutingModule,
    PoModule,
    PoPageDynamicSearchModule
  ],
  exports: [
    LaboratoriosListComponent
  ]
})
export class LaboratoriosModule { }
