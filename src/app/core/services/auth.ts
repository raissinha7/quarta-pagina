import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  login(email: string, senha: string): boolean {

    const dados = localStorage.getItem('usuarioCadastro');

    if (!dados) {
      return false;
    }

    const usuario = JSON.parse(dados);

    const emailCorreto =
      usuario.email.trim().toLowerCase() ===
      email.trim().toLowerCase();

    const senhaCorreta =
      usuario.senha === senha;

    if (emailCorreto && senhaCorreta) {

      localStorage.setItem('usuarioLogado', 'true');

      return true;
    }

    return false;
  }


  logout(): void {
    localStorage.removeItem('usuarioLogado');
  }


  estaLogado(): boolean {
    return localStorage.getItem('usuarioLogado') === 'true';
  }

}