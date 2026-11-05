
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Livros } from '../../services/livros';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);
  private livrosService = inject(Livros);

  readonly gruposDeGeneros = computed(() => {
    const generos = [
      ...new Set(
        this.livrosService.livros()
          .map(livro => livro.genero.trim())
          .filter(Boolean)
      )
    ].sort((a, b) => a.localeCompare(b, 'pt-BR'));

    const grupos = [
      {
        nome: 'Romance',
        corresponde: (genero: string) => /^romance/i.test(genero) || /\/romance/i.test(genero)
      },
      {
        nome: 'Mistério, policial e terror',
        corresponde: (genero: string) => /mistério|policial|suspense|terror/i.test(genero)
      },
      {
        nome: 'Contos, poesia e sátira',
        corresponde: (genero: string) => /conto|poesia|poema|ficção absurda|novela|sátira/i.test(genero)
      },
      {
        nome: 'Fantasia, ficção científica e aventura',
        corresponde: (genero: string) => /fantasia|ficção|realismo mágico|aventura/i.test(genero)
      },
      {
        nome: 'História e conhecimento',
        corresponde: (genero: string) => /autobiografia|história|programação/i.test(genero)
      }
    ];

    const generosRestantes = new Set(generos);
    const gruposOrganizados = grupos.map(grupo => {
      const itens = generos.filter(genero => {
        if (!generosRestantes.has(genero) || !grupo.corresponde(genero)) {
          return false;
        }

        generosRestantes.delete(genero);
        return true;
      });

      return { nome: grupo.nome, generos: itens };
    }).filter(grupo => grupo.generos.length > 0);

    if (generosRestantes.size > 0) {
      gruposOrganizados.push({
        nome: 'Outros gêneros',
        generos: [...generosRestantes]
      });
    }

    return gruposOrganizados;
  });

  irParaLivros(genero?: string) {
    this.router.navigate(['/livros'], {
      queryParams: genero ? { genero } : {}
    });
  }

  pesquisar(termo: string) {
    const busca = termo.trim();

    if (busca !== '') {
      this.router.navigate(['/livros'], {
        queryParams: { busca }
      });
    }
  }
}
