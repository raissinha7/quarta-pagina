
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Livros } from '../../services/livros';
import { FavoritosComponent } from '../favoritos/favoritos';
import { Emprestimos } from '../../emprestimos/emprestimos';

interface UsuarioConta {
  nome: string;
  email: string;
  celular?: string;
  telefone?: string;
  cep?: string;
  endereco?: string;
  avatar?: string;
}

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [RouterLink, FavoritosComponent, Emprestimos],
  templateUrl: './minha-conta.html',
  styleUrl: './minha-conta.css'
})
export class MinhaConta {
  private auth = inject(Auth);
  private router = inject(Router);
  private livrosService = inject(Livros);

  usuario: UsuarioConta | null = JSON.parse(
    localStorage.getItem('usuarioCadastro') || 'null'
  );

  readonly avatares = ['📚', '🦊', '🐱', '🐼', '🦉', '🐸'];
  avatarSelecionado = this.usuario?.avatar ?? this.avatares[0];

  constructor() {
    if (!this.auth.estaLogado()) {
      this.router.navigate(['/login']);
    }
  }

  sair(): void {
    this.auth.logout();
    this.usuario = null;
    this.router.navigate(['/home']);
  }

  selecionarAvatar(avatar: string): void {
    if (!this.usuario || !this.avatares.includes(avatar)) {
      return;
    }

    this.avatarSelecionado = avatar;
    this.usuario = { ...this.usuario, avatar };
    localStorage.setItem('usuarioCadastro', JSON.stringify(this.usuario));
  }

  excluirConta(): void {
    if (!window.confirm('Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      return;
    }

    localStorage.removeItem('usuarioCadastro');
    this.livrosService.limparDadosUsuario();
    this.auth.logout();
    this.usuario = null;
    this.router.navigate(['/home']);
  }
}
