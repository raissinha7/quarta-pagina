import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Livros } from '.././services/livros';
import { Livro } from '../core/models/livro.model';

@Component({
  selector: 'app-livros',
  imports: [],
  templateUrl: './livros.html',
  styleUrl: './livros.css'
})
export class LivrosComponent {

  private livrosService = inject(Livros);
  private router = inject(Router);

  livros = this.livrosService.livros;

  favoritar(id: number) {
    this.livrosService.alternaFavorito(id);
  }
  emprestar(livro: Livro) {
    this.livrosService.adicionarEmprestimo(livro);
    this.router.navigate(['/emprestimos']);
  }
}