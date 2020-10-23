import { PoModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PoModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
