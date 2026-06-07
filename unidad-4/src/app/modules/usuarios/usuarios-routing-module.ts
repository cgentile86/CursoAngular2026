import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { UsuarioDetalle } from './usuario-detalle/usuario-detalle';

const routes: Routes = [
  {
    path: '',
    component: Usuarios
  },
  {
    path: ':id',
    component:  UsuarioDetalle
  },
  {
      path:'**',
      redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
