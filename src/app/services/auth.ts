import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  logado = signal<boolean>(
    localStorage.getItem('quartapaginaLogado') === 'true'
  );
  login(email: string, senha: string): boolean {

    if (email === 'usuario@firjan.com' && senha === '123456') {
      localStorage.setItem('quartapaginaLogado', 'true');

      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('quartapaginaLogado');
    this.logado.set(false);
  }


}
