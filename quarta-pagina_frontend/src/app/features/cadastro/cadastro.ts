
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { Livros } from '../../services/livros';
import { Livro } from '../../core/models/livro.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  private router = inject(Router);
  private auth = inject(Auth);
  private livrosService = inject(Livros);

  nome = '';
  email = '';
  senha = '';
  endereco = '';

  cadastrar(): void {
    const nomeDigitado = this.nome.trim();
    const emailDigitado = this.email.trim().toLowerCase();
    const senhaDigitada = this.senha.trim();
    const enderecoDigitado = this.endereco.trim();

    if (
      !nomeDigitado ||
      !emailDigitado ||
      !senhaDigitada ||
      !enderecoDigitado
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    this.auth.cadastrar(
      nomeDigitado,
      emailDigitado,
      senhaDigitada,
      enderecoDigitado
    );

    alert('Cadastro realizado com sucesso!');

    const pendente = localStorage.getItem(
      'livroPendenteEmprestimo'
    );

    if (pendente) {
      try {
        const livro: Livro = JSON.parse(pendente);

        this.livrosService.adicionarEmprestimo(livro);
        localStorage.removeItem('livroPendenteEmprestimo');
        localStorage.removeItem('retornarAoEmprestimo');

        this.router.navigate(['/emprestimos']);
        return;
      } catch (erro) {
        console.error('Erro ao recuperar o livro pendente:', erro);
      }
    }

    this.router.navigate(['/minha-conta']);
  }

  voltarLogin(): void {
    this.router.navigate(['/login']);
  }
}
