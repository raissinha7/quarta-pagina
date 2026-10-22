
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-admin.html',
  styleUrl: './login-admin.css'
})
export class LoginAdmin {
  private auth = inject(Auth);
  private router = inject(Router);

  email = '';
  senha = '';
  erro = '';

  entrar(): void {
    const emailDigitado = this.email.trim().toLowerCase();
    const senhaDigitada = this.senha.trim();

    const sucesso = this.auth.loginBibliotecario(
      emailDigitado,
      senhaDigitada
    );

    if (!sucesso) {
      this.erro = 'E-mail ou senha incorretos.';
      return;
    }

    this.erro = '';
    this.router.navigate(['/adicionar']);
  }

  voltar(): void {
    this.router.navigate(['/login']);
  }
}
