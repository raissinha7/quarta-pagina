import { ActivatedRoute, Router } from '@angular/router';
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
  private route = inject(ActivatedRoute);

  livros = this.livrosService.livros;

  livrosFiltrados: Livro[] = [];

  constructor() {

    this.route.queryParamMap.subscribe(params => {

      const busca = (params.get('busca') || '')
        .toLowerCase()
        .trim();

      const lista = this.livros();

      if (busca === '') {

        this.livrosFiltrados = lista;

      } else {

        this.livrosFiltrados = lista.filter((livro: Livro) =>
          livro.titulo.toLowerCase().includes(busca)
        );

      }

    });

  }

  favoritar(id: number) {
    this.livrosService.alternaFavorito(id);
  }

  emprestar(livro: Livro) {
    this.livrosService.adicionarEmprestimo(livro);
    this.router.navigate(['/emprestimo']);
  }

}