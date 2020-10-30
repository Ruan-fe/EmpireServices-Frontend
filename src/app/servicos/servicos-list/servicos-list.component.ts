import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoNotification, PoNotificationService, PoPageSlideComponent, PoTableColumn } from '@po-ui/ng-components';
import { colors } from '@po-ui/ng-components/lib/interceptors/po-http-interceptor/po-http-interceptor-detail/po-http-interceptor-detail.component';
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
  itemSelect: any;
  idLaboratorio: any;
  constructor(private formBuilder: FormBuilder, private service: ServicosService, private computadorService: ComputadoresService, 
    private laboratorioService: LaboratoriosService , private poNotification: PoNotificationService) { 
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
  @ViewChild('modalFiltro', { static: true }) modalFiltro: PoModalComponent;
  @ViewChild('modalSalvarServico', { static: true }) modalSalvarServico: PoModalComponent;
  @ViewChild('modalAlterarStatus', { static: true }) modalAlterarStatus: PoModalComponent;

  cancelarAtualizarStatus: PoModalAction = {
    action: () => {
      this.modalAlterarStatus.close();
    },
    label: 'Cancelar',
    danger: true
  };

  confirmaAtualizarStatus: PoModalAction = {
    action: () => {
      this.atualizarStatus();
    },
    label: 'Confirmar'
  };

  perguntaFiltroStatus(){
    this.modalFiltro.open()
  }
  perguntaAlterarStatus(serv: Servicos){
    this.servico = serv;
    this.form.get('id').setValue(this.servico.id);
    this.form.get('idUsuario').setValue(this.servico.idUsuario);
    this.form.get('idLaboratorio').setValue(this.servico.idLaboratorio);
    this.form.get('idComputador').setValue(this.servico.idComputador);
    this.form.get('dataAbertura').setValue(this.servico.dataAbertura);
    this.form.get('status').setValue(this.servico.status);
    this.modalAlterarStatus.open()
  }

  atualizarStatus(){
    let status = this.form.get('status').value
    
    if(status == 'P'){
      this.form.get('status').setValue('C')
    }
    else{
      this.form.get('status').setValue('P')
    }
    
    this.servico = this.form.value
    this.service.salvarServico(this.servico).subscribe(
      res =>{
        this.poNotification.success('Status alterado com sucesso!')
      },
      error =>{
        this.poNotification.error('Não foi possível alterar o status!')
      }
    )
    this.modalAlterarStatus.close();

  }

  iniciarForm(): void{
    this.form = this.formBuilder.group({
      id : [''],
      descricao : ['',Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)]),],
      idLaboratorio: [''],
      dataAbertura: [''],
      idComputador: [''],
      idUsuario: [1],
      status: ['P']
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
      property: 'nomeUsuario',
      label: 'Usuário',
      type: 'string'
    },
    
    {
      property: 'status',
      type: 'subtitle',
      width: '80px',
      subtitles: [
        { value: 'P', color: 'color-08', label: 'Pendente', content: 'P' },
        { value: 'C', color: 'color-11', label: 'Concluído', content: 'C' },
      ]
    },
  ];
  

  items: Array<any> = [];
  actionsTable = [
    {
      action: this.perguntaAlterarStatus.bind(this),
      label: 'Alterar Status',
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
  listarServicosPorStatusP(){
    this.service.listarComFiltroStatusP('P').subscribe(res =>{this.items = res})
    this.modalFiltro.close();
  }
  listarServicosPorStatusC(){
    this.service.listarComFiltroStatusC('C').subscribe(res =>{this.items = res})
    this.modalFiltro.close();
  }
  listarComputadores(){
    this.computadorService.listarTodos().subscribe(res =>{this.computadores = res})
  }
  listarCompPorLab(){
    let idLaboratorio = this.form.get('idLaboratorio').value
    this.computadorService.listarComputadoresFiltroPorIdLab(idLaboratorio).subscribe(
      res=>{
        this.computadores = res;
        console.log(res)
            }
    )
    console.log(this.form.get('idLaboratorio').value)
  }
  
  listarLaboratorios(){
    this.laboratorioService.listarTodos().subscribe(res =>{this.laboratorios = res})
  }
  perguntaDetalhesServico(serv: Servicos){
    this.servico = serv;
    this.modalDetalhesServico.open();
  }
  salvarServico(){
    this.servico = this.form.value
    this.service.salvarServico(this.servico).subscribe(
      res =>{
        this.poNotification.success('Serviço aberto com sucesso!');
      }
    )
    this.service.listarComFiltroStatusP('');
 
  }

  

}
