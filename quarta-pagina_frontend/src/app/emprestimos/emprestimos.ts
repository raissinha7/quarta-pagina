
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Livros } from '../services/livros';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './emprestimos.html',
  styleUrl: './emprestimos.css'
})
export class Emprestimos {
  private livrosService = inject(Livros);
  private router = inject(Router);
  private auth = inject(Auth);

  get livrosEmprestados() {
    return this.livrosService.emprestimos();
  }

  confirmarEmprestimo(): void {
    // Verifica se o usuário está logado
    if (!this.auth.estaLogado()) {
      alert('Você precisa fazer login para alugar um livro.');

      // Guarda a intenção de voltar aos empréstimos após o login
      localStorage.setItem('retornarAoEmprestimo', 'true');

      this.router.navigate(['/login']);
      return;
    }

    // Verifica se existe algum livro selecionado
    if (this.livrosEmprestados.length === 0) {
      alert('Nenhum livro selecionado para empréstimo.');
      this.router.navigate(['/livros']);
      return;
    }

    this.router.navigate(['/finalizar-emprestimo']);
  }
}
