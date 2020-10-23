import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-laboratorios-list',
  templateUrl: './laboratorios-list.component.html',
  styleUrls: ['./laboratorios-list.component.css']
})
export class LaboratoriosListComponent implements OnInit {
  readonly breadcrump: PoBreadcrumb = {
    items:[
      {label: 'Home', link:'/laboratorios'},
      {label: 'Laboratorios', link: '/laboratorios'},]
  }

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'id',
      label: 'Código',
      type: 'string'
    },
    {
      property: 'descricao',
      label: 'Descrição',
      type: 'string'
    },
  ];

  items: Array<any> = [];
  actionsTable = [
    {
      action: this.perguntaEditarLaboratorio.bind(this),
      label: 'Editar',
      icon: 'po-icon po-icon-edit'
    },
    {
      action: this.perguntaExcluirLaboratorio.bind(this),
      label: 'Excluir',
      icon: 'po-icon po-icon-delete'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  novoLaboratorio(){

  }
  perguntaExcluirLaboratorio(){

  }
  perguntaEditarLaboratorio(){

  }

}
