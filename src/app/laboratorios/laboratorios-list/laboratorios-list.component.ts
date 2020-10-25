import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoTableColumn, PoNotificationService } from '@po-ui/ng-components';
import { Laboratorios } from '../Laboratorios';
import { LaboratoriosService } from '../laboratorios.service';

@Component({
  selector: 'app-laboratorios-list',
  templateUrl: './laboratorios-list.component.html',
  styleUrls: ['./laboratorios-list.component.css']
})
export class LaboratoriosListComponent implements OnInit {
  laboratorios: Laboratorios;
  form: FormGroup;
  
  @ViewChild(PoModalComponent, { static: true }) modalSalvarLaboratorio: PoModalComponent;
  @ViewChild('modalExcluirLaboratorio', { static: true }) modalExcluirLaboratorio: PoModalComponent;
  @ViewChild('modalEditarLaboratorio', { static: true }) modalEditarLaboratorio: PoModalComponent;

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

  cancelarCadastro: PoModalAction = {
    action: () => {
      this.modalSalvarLaboratorio.close();
    },
    label: 'Cancelar',
    danger: true
  };

  salvarCadastro: PoModalAction = {
    action: () => {
      this.salvarLaboratorio();
    },
    label: 'Confirmar'
  };

  cancelarExclusaoLaboratorio: PoModalAction = {
    action: () => {
      this.modalExcluirLaboratorio.close();
    },
    label: 'Cancelar',
    danger: true
  };

  excluirLaboratorio: PoModalAction = {
    action: () => {
      this.excluirCadastroLaboratorio();
    },
    label: 'Confirmar'
  };

  cancelarEdicaoLaboratorio: PoModalAction = {
    action: () => {
      this.modalEditarLaboratorio.close();
    },
    label: 'Cancelar',
    danger: true
  };

  editarLaboratorio: PoModalAction = {
    action: () => {
      this.editarCadastroLaboratorio();
    },
    label: 'Confirmar'
  };
  
  constructor(private service: LaboratoriosService, private poNotification: PoNotificationService, private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.listarLaboratorios();
    this.iniciarForm();
  }

  iniciarForm(): void{
    this.form = this.formBuilder.group({
      id : [''],
      descricao : ['',Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)]),],
    })
  }

  listarLaboratorios(){
    this.service.listarTodos().subscribe(res =>{this.items = res});
  }

  salvarLaboratorio(){
    let laboratorio = new Laboratorios();
    laboratorio = this.form.value;
    this.service.salvar(laboratorio).subscribe(
      res=>{
        laboratorio = res;
        this.poNotification.success('Laboratório salvo com sucesso!');
      },
      error=>{
        this.poNotification.error('Não foi possível salvar o novo laboratório');
      }
    )
    this.modalSalvarLaboratorio.close();
    this.ngOnInit();
  }

  novoLaboratorio(){
    this.limparForm();
    this.modalSalvarLaboratorio.open();
  }

  perguntaExcluirLaboratorio(lab : Laboratorios): void{
    this.laboratorios = lab;
    this.modalExcluirLaboratorio.open()
  }
  excluirCadastroLaboratorio(): void{
    this.service.excluir(this.laboratorios.id).subscribe(
      res =>{
          this.poNotification.success('Laboratório excluído com sucesso!')
      },
      error =>{
        this.poNotification.error('Não foi possível excluir o laboratório')
      }
    )
      this.modalExcluirLaboratorio.close();
      this.ngOnInit();

  }

  perguntaEditarLaboratorio(lab: Laboratorios){
      this.laboratorios = lab;
      this.modalEditarLaboratorio.open();
      this.form.get('id').setValue(this.laboratorios.id);
      this.form.get('descricao').setValue(this.laboratorios.descricao);
  }
  editarCadastroLaboratorio(){
    this.laboratorios = this.form.value
    this.service.salvar(this.laboratorios).subscribe(
      res => {
        this.poNotification.success('Laboratório Editado com Sucesso!');
        this.modalEditarLaboratorio.close();
      },
      error =>{
        this.poNotification.error('Não foi possível editar o Laboratório!');
      }
    )  
    this.ngOnInit()
  }

  limparForm(): void{
    this.form.get('id').setValue(null);
    this.form.get('descricao').setValue(null);
  }

  

  



}