import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private auth = inject(Auth);
  private router = inject(Router);

  email = '';
  senha = '';

  entrar() {

    const sucesso = this.auth.login(
      this.email,
      this.senha
    );

    if (sucesso) {

      this.router.navigate(['/home']);

    } else {

      alert('E-mail ou senha incorretos!');

    }
  }

  esqueciSenha() {
    alert(
      'Entre em contato com a biblioteca para recuperar sua senha.'
    );
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }

  loginGoogle() {
    alert('Login com Google será adicionado em breve.');
  }

  loginFacebook() {
    alert('Login com Facebook será adicionado em breve.');
  }

}