import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroUsuario } from './registro-usuario/registro-usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('unidad-2');
}
