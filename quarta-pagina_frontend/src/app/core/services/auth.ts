import { Injectable, signal } from '@angular/core';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  endereco: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  logado = signal<boolean>(
    localStorage.getItem('quartapaginaLogado') === 'true'
  );

  estaLogado(): boolean {
    return this.logado();
  }

  login(email: string, senha: string): boolean {
    const usuarioSalvo = localStorage.getItem('usuarioCadastro');

    if (!usuarioSalvo) {
      return false;
    }

    try {
      const usuario: Usuario = JSON.parse(usuarioSalvo);

      const emailCorreto =
        usuario.email.trim().toLowerCase() ===
        email.trim().toLowerCase();

      const senhaCorreta =
        String(usuario.senha) === String(senha);

      if (emailCorreto && senhaCorreta) {
        localStorage.setItem('quartapaginaLogado', 'true');
        this.logado.set(true);
        return true;
      }

      return false;
    } catch (erro) {
      console.error('Erro ao validar o usuário:', erro);
      return false;
    }
  }

  cadastrar(
    nome: string,
    email: string,
    senha: string,
    endereco: string
  ): boolean {
    const usuario: Usuario = {
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      senha: senha.trim(),
      endereco: endereco.trim(),
    };

    localStorage.setItem(
      'usuarioCadastro',
      JSON.stringify(usuario)
    );

    localStorage.setItem('quartapaginaLogado', 'true');
    this.logado.set(true);

    return true;
  }

  logout(): void {
    localStorage.removeItem('quartapaginaLogado');
    this.logado.set(false);
  }

}