import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { Computadores } from 'src/app/computadores/Computadores';
import { ComputadoresService } from 'src/app/computadores/computadores.service';
import { Laboratorios } from 'src/app/laboratorios/Laboratorios';
import { LaboratoriosService } from 'src/app/laboratorios/laboratorios.service';
import { Servicos } from '../Servicos';
import {ServicosService } from '../servicos.service';

@Component({
  selector: 'app-servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.css']
})
export class ServicosListComponent implements OnInit {
  form: FormGroup;
  servico: Servicos;
  laboratorios: Laboratorios[] = [];
  computadores: Computadores[] = [];
  constructor(private formBuilder: FormBuilder, private service: ServicosService, private computadorService: ComputadoresService, 
    private laboratorioService: LaboratoriosService) { 
    this.servico = new Servicos();

  }

  ngOnInit(): void {
    this.iniciarForm();
    this.listarTodos();
    this.listarLaboratorios();
    this.listarComputadores();
  }

  
  readonly breadcrump: PoBreadcrumb = {
    items:[
      {label: 'Home', link:'/'},
      {label: 'Serviços', link: '/servicos'},]
  }
  @ViewChild('modalDetalhesServico', { static: true }) modalDetalhesServico: PoModalComponent;

  teste(){

  }
  iniciarForm(): void{
    this.form = this.formBuilder.group({
      id : [''],
      descricao : ['',Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)]),],
      laboratorio: [''],
      computador: ['']
    })
  }

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'id',
      label: 'Código',
      type: 'string'
    },
    {
      property: 'descComputador',
      label: 'Computador',
      type: 'string'
    },
    {
      property: 'descLaboratorio',
      label: 'Laboratório',
      type: 'string'
    },
    {
      property: 'dataAbertura',
      label: 'Data de Abertura',
      type: 'string'
    },
    {
      property: 'status',
      label: 'Status',
      type: 'string'
    },
  ];

  items: Array<any> = [];
  actionsTable = [
    {
      action: this.ngOnInit.bind(this),
      label: 'Editar',
      icon: 'po-icon po-icon-edit'
    },
    {
      action: this.perguntaDetalhesServico.bind(this),
      label: 'Detalhes',
      icon: 'po-icon po-icon-list'
    }
  ];

  listarTodos(){
    this.service.listarTodos().subscribe(res =>{this.items = res});
  }
  listarComputadores(){
    this.computadorService.listarTodos().subscribe(res =>{this.computadores = res})
  }
  listarLaboratorios(){
    this.laboratorioService.listarTodos().subscribe(res =>{this.laboratorios = res})
  }
  perguntaDetalhesServico(serv: Servicos){
    this.servico = serv;
    this.modalDetalhesServico.open();
  }

}
