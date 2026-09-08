import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Livro } from '../core/models/livro.model';
import { Livros } from '../services/livros';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './emprestimos.html',
  styleUrl: './emprestimos.css'
})
export class EmprestimosComponent {

  private livrosService = inject(Livros);
  private router = inject(Router);

  get livrosEmprestados(): Livro[] {
    return this.livrosService.emprestimos();
  }

  removerLivro(id: number) {
    this.livrosService.removerEmprestimo(id);
  }

  continuar() {
    if (this.livrosEmprestados.length === 0) {
      alert('Você ainda não selecionou nenhum livro.');
      return;
    }

    this.router.navigate(['/checkout']);
  }
}
