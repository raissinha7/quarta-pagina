import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {

  private router = inject(Router);

  nome = '';
  email = '';
  senha = '';

  cadastrar() {

    if (!this.nome || !this.email || !this.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    localStorage.setItem(
      'usuarioCadastro',
      JSON.stringify({
        nome: this.nome,
        email: this.email,
        senha: this.senha
      })
    );

    alert('Cadastro realizado com sucesso!');

    this.router.navigate(['/login']);
  }

  voltarLogin() {
    this.router.navigate(['/login']);
  }
}
