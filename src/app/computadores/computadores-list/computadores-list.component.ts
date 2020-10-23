import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { PoBreadcrumb, PoTableColumn, PoModalAction, PoModalComponent} from '@po-ui/ng-components';
import { Computadores } from '../Computadores';
import {ComputadoresService} from '../computadores.service';

@Component({
  selector: 'app-computadores-list',
  templateUrl: './computadores-list.component.html',
  styleUrls: ['./computadores-list.component.css']
})
export class ComputadoresListComponent implements OnInit {
  form: FormGroup;
  computador: Computadores;
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
      action: this.perguntaEditarComputador.bind(this),
      label: 'Editar',
      icon: 'po-icon po-icon-edit'
    },
    {
      action: this.perguntaExcluirComputador.bind(this),
      label: 'Excluir',
      icon: 'po-icon po-icon-delete'
    }
  ];

  cancelarCadastro: PoModalAction = {
    action: () => {
      this.modalSalvarComputador.close();
    },
    label: 'Cancelar',
    danger: true
  };

  salvarCadastro: PoModalAction = {
    action: () => {
      this.salvarComputador();
    },
    label: 'Confirmar'
  };

  cancelarCadastroComputador: PoModalAction = {
    action: () => {
      this.modalEdicaoComputador.close();
    },
    label: 'Cancelar',
    danger: true
  };

  editarCadastroComputador: PoModalAction = {
    action: () => {
      this.editarComputador();
    },
    label: 'Confirmar'
  };

  excluirCadastroComputador: PoModalAction = {
    action: () => {
      this.perguntaExcluirComputador();
    },
    label: 'Confirmar'
  };

  cancelarExclusaoComputador: PoModalAction = {
    action: () => {
      this.cancelarExcluirComputador();
    },
    label: 'Cancelar',
    danger: true
  };



  @ViewChild(PoModalComponent, { static: true }) modalSalvarComputador: PoModalComponent;
  @ViewChild('modalEdicaoComputador', { static: true }) modalEdicaoComputador: PoModalComponent;
  @ViewChild('modalExcluirComputador', { static: true }) modalExcluirComputador: PoModalComponent;
  

  readonly breadcrump: PoBreadcrumb = {
    items:[{label: 'Computadores', link: '/computadores'}]
  }

  constructor(private service: ComputadoresService) { }

  ngOnInit(): void {
    this.service.listarTodos().subscribe(res =>{this.items = res})
  }

  novoComputador(){
      this.modalSalvarComputador.open();
  }
  perguntaEditarComputador(){
    this.modalEdicaoComputador.open();
  
  }
  perguntaExcluirComputador(){
    this.modalExcluirComputador.open();
  
  }

  salvarComputador(){
    
  }
  editarComputador(){
    
  }
  cancelarExcluirComputador(){
    this.modalExcluirComputador.close();
  }

}
