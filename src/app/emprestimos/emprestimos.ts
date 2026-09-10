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

  get livrosEmprestados(): Livro[] {
    return this.livrosService.emprestimos();
  }

  removerLivro(id: number) {
    this.livrosService.removerEmprestimo(id);
  }
}
