
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  logado = signal<boolean>(
    localStorage.getItem('quartapaginaLogado') === 'true'
  );

  bibliotecarioLogado = signal<boolean>(
    localStorage.getItem('quartapaginaBibliotecarioLogado') === 'true'
  );

  estaLogado(): boolean {
    return this.logado();
  }

  estaLogadoComoBibliotecario(): boolean {
    return this.bibliotecarioLogado();
  }

  login(email: string, senha: string): boolean {
    const usuarioSalvo = localStorage.getItem('usuarioCadastro');

    const usuario = usuarioSalvo
      ? JSON.parse(usuarioSalvo)
      : null;

    const loginTeste =
      email === 'usuario@firjan.com' &&
      senha === '123456';

    const loginCadastro =
      usuario &&
      usuario.email === email &&
      usuario.senha === senha;

    if (loginTeste || loginCadastro) {
      localStorage.setItem('quartapaginaLogado', 'true');
      this.logado.set(true);
      return true;
    }

    return false;
  }

  loginBibliotecario(email: string, senha: string): boolean {
    const emailBibliotecario = 'bibliotecario@quartapagina.com';
    const senhaBibliotecario = 'Biblio@123';

    if (
      email === emailBibliotecario &&
      senha === senhaBibliotecario
    ) {
      localStorage.setItem('quartapaginaBibliotecarioLogado', 'true');
      this.bibliotecarioLogado.set(true);
      return true;
    }

    return false;
  }

  cadastrar(
    nome: string,
    email: string,
    senha: string,
    endereco: string
  ): boolean {
    localStorage.setItem(
      'usuarioCadastro',
      JSON.stringify({ nome, email, senha, endereco })
    );

    localStorage.setItem('quartapaginaLogado', 'true');
    this.logado.set(true);

    return true;
  }

  logout(): void {
    localStorage.removeItem('quartapaginaLogado');
    this.logado.set(false);
  }

  logoutBibliotecario(): void {
    localStorage.removeItem('quartapaginaBibliotecarioLogado');
    this.bibliotecarioLogado.set(false);
  }
}
