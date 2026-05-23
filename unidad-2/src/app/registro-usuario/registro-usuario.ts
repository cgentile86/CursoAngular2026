import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-usuario.html',
  styleUrl: './registro-usuario.css',
})
export class RegistroUsuario {
  formularioRegistro: FormGroup;
  datosEnviados = false;
  
  constructor(private formBuilder: FormBuilder) {
    this.formularioRegistro = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
      passwordRepeat: ['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
      fechaNacimiento: ['', [Validators.required]],
      mensaje: ['']
    });
  }

  submitRegistro() {
    this.datosEnviados = true;
    console.log(this.formularioRegistro.value);
  }

  getFormularioError(fieldName: string): string {
    
    const field = this.formularioRegistro.get(fieldName);
        
    //Si el usuario no toco el campo no mostrar error  
    if(!field?.touched) {
      return '';
    }

    //En caso de que tu campo no este correctamente controlado, devolver ''
    if(!field){
      return '';
    }

    if (field?.hasError(ERRORS.REQUIRED.NAME)) {
      return 'Este campo es obligatorio.';
    }
    if (field?.hasError(ERRORS.EMAIL.NAME)) {
      return 'Ingrese un correo electrónico válido.';
    }
    if (field?.hasError(ERRORS.MIN_LENGTH.NAME)) {
      return 'El campo debe tener al menos 3 caracteres.';
    }
    if (field?.hasError(ERRORS.PATTERN.NAME)) {
      if (fieldName === 'password' || fieldName === 'passwordRepeat') {
        return 'La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.';
      }
      return 'El campo tiene un formato inválido.';
    }

    if (fieldName === 'passwordRepeat' ||fieldName === 'password' )
    {
      if(this.formularioRegistro.get('passwordRepeat')?.value !== null && this.formularioRegistro.get('password')?.value !== null)
      {
         if (this.formularioRegistro.get('passwordRepeat')?.value !== this.formularioRegistro.get('password')?.value ){
          return 'Las contraseñas no coinciden.'; 
         }
      }
    }
    
    return '';
  }

}

const ERRORS = {
  MIN_LENGTH: {
    NAME: 'minlength',
  },
  REQUIRED: {
    NAME: 'required'
  },
  PATTERN: {
    NAME: 'pattern'
  },
  EMAIL: {
    NAME: 'email'
  }  
}
