
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';
import { Livros } from '../../../services/livros';

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

    let acaoPendente: 'aluguel' | 'favorito' | null;

    try {
      acaoPendente = this.livrosService.processarAcaoPendente();
    } catch (erro) {
      console.error('Erro ao processar a ação pendente:', erro);
      alert('Seu login foi realizado, mas não foi possível concluir a ação no livro.');
      this.router.navigate(['/home']);
      return;
    }

    if (acaoPendente === 'aluguel') {
      this.router.navigate(['/emprestimos']);
      return;
    }

    if (acaoPendente === 'favorito') {
      this.router.navigate(['/favoritos']);
      return;
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
