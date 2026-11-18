
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './minha-conta.html',
  styleUrl: './minha-conta.css'
})
export class MinhaConta {
  private auth = inject(Auth);
  private router = inject(Router);

  usuario = JSON.parse(
    localStorage.getItem('usuarioCadastro') || 'null'
  );

  editando = false;
  alterandoSenha = false;

  nome = '';
  endereco = '';

  senhaAtual = '';
  novaSenha = '';
  confirmarSenha = '';

  constructor() {
    if (!this.auth.estaLogado()) {
      this.router.navigate(['/login']);
      return;
    }

    this.nome = this.usuario?.nome || '';
    this.endereco = this.usuario?.endereco || '';
  }

  editarPerfil(): void {
    this.nome = this.usuario?.nome || '';
    this.endereco = this.usuario?.endereco || '';
    this.editando = true;
  }

  cancelarEdicao(): void {
    this.editando = false;
    this.nome = this.usuario?.nome || '';
    this.endereco = this.usuario?.endereco || '';
  }

  salvarPerfil(): void {
    if (!this.nome.trim() || !this.endereco.trim()) {
      alert('Preencha todos os campos!');
      return;
    }

    this.usuario.nome = this.nome.trim();
    this.usuario.endereco = this.endereco.trim();

    localStorage.setItem(
      'usuarioCadastro',
      JSON.stringify(this.usuario)
    );

    this.editando = false;

    alert('Dados atualizados com sucesso!');
  }

  selecionarFoto(event: Event): void {
    const input = event.target as HTMLInputElement;
    const arquivo = input.files?.[0];

    if (!arquivo) return;

    if (!arquivo.type.startsWith('image/')) {
      alert('Selecione um arquivo de imagem válido.');
      input.value = '';
      return;
    }

    if (arquivo.size > 1024 * 1024) {
      alert('A imagem deve ter no máximo 1 MB.');
      input.value = '';
      return;
    }

    const leitor = new FileReader();

    leitor.onload = () => {
      this.usuario.foto = leitor.result as string;

      localStorage.setItem(
        'usuarioCadastro',
        JSON.stringify(this.usuario)
      );

      alert('Foto de perfil atualizada!');
    };

    leitor.readAsDataURL(arquivo);
  }

  abrirAlteracaoSenha(): void {
    this.alterandoSenha = true;
  }

  cancelarAlteracaoSenha(): void {
    this.alterandoSenha = false;
    this.senhaAtual = '';
    this.novaSenha = '';
    this.confirmarSenha = '';
  }

  alterarSenha(): void {
    if (
      !this.senhaAtual ||
      !this.novaSenha ||
      !this.confirmarSenha
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    if (this.senhaAtual !== this.usuario.senha) {
      alert('A senha atual está incorreta!');
      return;
    }

    if (this.novaSenha.length < 6) {
      alert('A nova senha deve ter pelo menos 6 caracteres!');
      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    this.usuario.senha = this.novaSenha;

    localStorage.setItem(
      'usuarioCadastro',
      JSON.stringify(this.usuario)
    );

    this.cancelarAlteracaoSenha();

    alert('Senha alterada com sucesso!');
  }

  sair(): void {
    this.auth.logout();
    this.usuario = null;
    this.router.navigate(['/home']);
  }
}
