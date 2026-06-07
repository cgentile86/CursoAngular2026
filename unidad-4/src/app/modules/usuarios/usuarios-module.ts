import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { Usuarios } from './usuarios/usuarios';
import { ListaUsuarios } from '../../componentes/lista-usuarios/lista-usuarios';

@NgModule({
  declarations: [Usuarios],
  imports: [CommonModule, UsuariosRoutingModule, ListaUsuarios],
})
export class UsuariosModule {}
