import { Component, OnInit, inject } from '@angular/core';
import { Usuario, Usuarios } from '../../servicios/usuarios';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  imports: [RouterLink],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {

listaUsuarios: Usuario [] = [];
private usuariosService = inject(Usuarios)

cargarUsuarios(): void {
  this.listaUsuarios = this.usuariosService.getUsuarios()
}

ngOnInit(): void {
    this.cargarUsuarios()
}

eliminarUsuario(idUsuario:number): void{
  if(this.usuariosService.deleteUsuarioById(idUsuario)){ 
    this.cargarUsuarios()
  }
}

}