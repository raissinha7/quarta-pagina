import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = signal<boolean>(
    localStorage.getItem('usuarioLogado') === 'true'
  );

  isLoggedIn() {
    return this.loggedIn();
  }

  login(email: string, senha: string): boolean {

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      return false;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (usuario.email === email && usuario.senha === senha) {
      this.loggedIn.set(true);
      localStorage.setItem('usuarioLogado', 'true');
      return true;
    }

    return false;
  }

  cadastrar(nome: string, email: string, senha: string): boolean {

    const usuario = {
      nome,
      email,
      senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.loggedIn.set(true);
    localStorage.setItem('usuarioLogado', 'true');

    return true;
  }

  logout() {
    this.loggedIn.set(false);
    localStorage.removeItem('usuarioLogado');
  }
}
