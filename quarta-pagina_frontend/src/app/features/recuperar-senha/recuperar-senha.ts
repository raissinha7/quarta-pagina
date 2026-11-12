
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './recuperar-senha.html',
  styleUrl: './recuperar-senha.css'
})
export class RecuperarSenha {
  private auth = inject(Auth);
  private router = inject(Router);

  email = '';
  novaSenha = '';
  confirmarSenha = '';

  salvarSenha(): void {
    const email = this.email.trim().toLowerCase();

    if (!email || !this.novaSenha || !this.confirmarSenha) {
      alert('Preencha todos os campos.');
      return;
    }

    if (this.novaSenha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    const sucesso = this.auth.recuperarSenha(
      email,
      this.novaSenha
    );

    if (!sucesso) {
      alert('E-mail não encontrado. Verifique seu cadastro.');
      return;
    }

    alert('Senha alterada com sucesso!');
    this.router.navigate(['/login']);
  }
}

