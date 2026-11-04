
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';
import { Livros } from '../../../services/livros';
import { Livro } from '../../../core/models/livro.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);
  private livrosService = inject(Livros);

  email = '';
  senha = '';

  entrar(): void {
    const emailDigitado = this.email.trim().toLowerCase();
    const senhaDigitada = this.senha.trim();

    const sucesso = this.auth.login(
      emailDigitado,
      senhaDigitada
    );

    if (!sucesso) {
      alert('E-mail ou senha incorretos!');
      return;
    }

    const pendente = localStorage.getItem(
      'livroPendenteEmprestimo'
    );

    if (pendente) {
      try {
        const livro: Livro = JSON.parse(pendente);

        this.livrosService.adicionarEmprestimo(livro);
        localStorage.removeItem('livroPendenteEmprestimo');

        this.router.navigate(['/emprestimos']);
        return;
      } catch (erro) {
        console.error('Erro ao recuperar o livro pendente:', erro);
      }
    }

    this.router.navigate(['/minha-conta']);
  }

  cadastrar(): void {
    this.router.navigate(['/cadastro']);
  }

  acessarAdmin(): void {
    this.router.navigate(['/login-admin']);
  }

  esqueciSenha(): void {
  const email = prompt('Digite seu e-mail cadastrado:');

  if (!email) return;

  const novaSenha = prompt('Digite sua nova senha:');

  if (!novaSenha || novaSenha.trim().length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  const confirmarSenha = prompt('Confirme sua nova senha:');

  if (novaSenha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const sucesso = this.auth.recuperarSenha(
    email.trim().toLowerCase(),
    novaSenha.trim()
  );

  if (sucesso) {
    alert('Senha alterada com sucesso! Você já pode entrar.');
    this.senha = '';
  } else {
    alert('E-mail não encontrado. Verifique seu cadastro.');
  }
}

  loginGoogle(): void {
    alert('Login com Google será adicionado em breve.');
  }

  loginFacebook(): void {
    alert('Login com Facebook será adicionado em breve.');
  }
}
