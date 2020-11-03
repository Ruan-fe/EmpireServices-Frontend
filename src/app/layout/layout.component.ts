import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { Usuarios } from '../usuarios/Usuarios';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  idUsuario: any = '';
  usuarioAutenticado: string = '';
  usuario: Usuarios;
  constructor(private router: Router, private usuarioService: UsuariosService) { }
  ngOnInit(){
   
  }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.navegarHome.bind(this), icon: 'po-icon-home'  },
    { label: 'Serviços', action: this.navegarServicos.bind(this), icon: 'po-icon-document-filled'  },
    { label: 'Computadores', action: this.navegarComputadores.bind(this), icon: 'po-icon-device-desktop'  },
    { label: 'Laboratórios', action: this.navegarLaboratorios.bind(this), icon: 'po-icon-layers' },
    { label: 'Usuários', action: this.navegarUsuarios.bind(this), icon: 'po-icon-users' }
  ];
  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon-news',
      label: 'É apenas um teste :/',
      type: 'danger',
    }
  ]
  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'Seja bem vindo ao sistema!',
    title: this.usuarioService.getUsuarioAutenticado()
  }
  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-exit', label: 'Exit', type: 'danger', separator: true, action: item => this.deslogar(item) }
  ];

  private deslogar($event){
    this.usuarioService.deslogar();
    this.router.navigateByUrl('/login')
  }
  private navegarHome() {
    this.router.navigateByUrl('/home')
    }
  private navegarServicos(){
    this.router.navigateByUrl('/servicos')
  }
  private navegarComputadores(){
      this.router.navigateByUrl('/computadores')
  }
  private navegarLaboratorios(){
    this.router.navigateByUrl('/laboratorios')
  }
  private navegarUsuarios(){
    this.router.navigateByUrl('/usuarios')
  }

  

}
