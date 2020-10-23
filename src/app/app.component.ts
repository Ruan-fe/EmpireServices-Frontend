import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Serviços', action: this.onClick.bind(this) },
    { label: 'Computadores', action: this.navegarComputadores.bind(this) },
    { label: 'Laboratórios', action: this.navegarLaboratorios.bind(this) }
  ];
  
  private onClick() {
    alert('Clicked in menu item')
  }
  private navegarComputadores(){
      this.router.navigateByUrl('/computadores')
  }
  private navegarLaboratorios(){
    this.router.navigateByUrl('/laboratorios')
  }
  
}


