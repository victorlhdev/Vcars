import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) {}

  fazerLogin(Usuario: Usuario): void {
    if (Usuario.nome === 'victorlh' && Usuario.senha === '180295') {
      this.usuarioAutenticado = true;
      this.router.navigate(['painel']);
    } else {
      this.usuarioAutenticado = false;
      
    }
  }
}
