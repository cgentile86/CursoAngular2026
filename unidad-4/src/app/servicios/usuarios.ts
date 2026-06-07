import { Injectable } from '@angular/core';

export interface Usuario {
  id: number
  email: string
  rol: 'admin' | 'user'
  estado: 'activo' | 'inactivo'
}

@Injectable({
  providedIn: 'root',
})

export class Usuarios {
  private listaUsuarios: Usuario[] = [ 
    { id: 1, email: 'administador_1@dummy.com', rol: 'admin', estado: 'activo' },
    { id: 2, email: 'administador_2@dummy.com', rol: 'admin', estado: 'inactivo' },
    { id: 3, email: 'user_1@example.com', rol: 'user', estado: 'activo' },
    { id: 4, email: 'user_2@example.com', rol: 'user', estado: 'inactivo' },
  ];

  getUsuarios() {
    return [...this.listaUsuarios]
  }
  
  addUsuario(usuario_raw: Omit<Usuario, 'id'>): Usuario {
    const newId = this.listaUsuarios.length > 0 ? Math.max(...this.listaUsuarios.map(usuario => usuario.id)) + 1 : 1
    const newUsuario: Usuario = { id: newId, ...usuario_raw }
    this.listaUsuarios.push(newUsuario)
    return newUsuario
  } 

  deleteUsuarioById(idUsuario: number): boolean {
    const cantidadUsuariosOriginal = this.listaUsuarios.length

    //filtro usuarios que no tengan el id a borrar para actualizar lista
    this.listaUsuarios = this.listaUsuarios.filter((usuario) => { return usuario.id != idUsuario })
    
    return this.listaUsuarios.length < cantidadUsuariosOriginal
  }

  getUsuarioById(idUsuario: number): Usuario | undefined {
    const usuario = this.listaUsuarios.find((usuario) => { return usuario.id === idUsuario })
    return usuario;
  }
      
}
