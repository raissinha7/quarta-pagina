
import { Injectable, signal, computed, inject } from '@angular/core';
import { Livro } from '../core/models/livro.model';
import { Auth } from './auth';

export interface RegistroEmprestimo {
  livros: Livro[];
  data: string;
  dataRetirada: string;
  localRetirada: string;
}

@Injectable({
  providedIn: 'root',
})
export class Livros {
  private readonly auth = inject(Auth);

  livros = signal<Livro[]>([
    {
      id: 1,
      titulo: 'O Pequeno Principe',
      autor: 'Antoine de Sain-Exupery',
      categoria: 'Fantasia',
      descricao: 'Uma historia sobre amizade, amor e a importancia de enxergar alem das aparencias.',
      capa: 'https://covers.openlibrary.org/b/title/The%20Little%20Prince-L.jpg',
      favorito: false
    },
    {
      id: 2,
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      categoria: 'Romance',
      descricao: 'Um classico da literatura brasileira narrado por Bentinho.',
      capa: 'https://covers.openlibrary.org/b/title/Dom%20Casmurro-L.jpg',
      favorito: false
    },
    {
      id: 3,
      titulo: 'Harry Potter e a Pedra Filosofal',
      autor: 'J. K. Rowling',
      categoria: 'Fantasia',
      descricao: 'Harry descobre que e um bruxo e comeca a jornada em Hogwarts.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg',
      favorito: false
    },
    {
      id: 4,
      titulo: 'O Hobbit',
      autor: 'J. R. R. Tolkien',
      categoria: 'Aventura',
      descricao: 'Bilbo Bolseiro embarca em uma aventura pela Terra Média.',
      capa: 'https://covers.openlibrary.org/b/title/The%20Hobbit-L.jpg',
      favorito: false
    },
    {
      id: 5,
      titulo: 'JavaScript: O Guia Definitivo',
      autor: 'David Flanagan',
      categoria: 'Programação',
      descricao: 'Um Guia completo para aprender JavaScript e desenvolver aplicaçoões para a web.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780596805524-M.jpg',
      favorito: false
    },
    {
      id: 6,
      titulo: 'Clean Code',
      autor: 'Robert C. Martin',
      categoria: 'Programação',
      descricao: 'Um livro sobre boas práticas para escrever códigos mais limpos, organizados e fáceis de manter.',
      capa: 'https://covers.openlibrary.org/b/title/Clean%20Code-L.jpg',
      favorito: false
    },
    {
      id: 7,
      titulo: 'Introdução á Algoritmos',
      autor: 'Thomas H. Cormen',
      categoria: 'Programação',
      descricao: 'Uma introdução aos principais conceitos e técnicas de algoritmos e estruturas de dados.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg',
      favorito: false
    },
    {
      id: 8,
      titulo: 'Sapiens',
      autor: 'Yuval Noah Harari',
      categoria: 'História',
      descricao: 'Uma visão da história da humanidade desde os primeiros seres humanos até os tempos modernos.',
      capa: 'https://covers.openlibrary.org/b/title/Sapiens-L.jpg',
      favorito: false
    },
    {
      id: 9,
      titulo: 'Uma Breve História do Tempo',
      autor: 'Stephen Hawking',
      categoria: 'História',
      descricao: 'Uma introdução às grandes questões sobre o universo, o tempo e a origem do cosmos.',
      capa: 'https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg',
      favorito: false
    },
    {
      id: 10,
      titulo: 'História do Brasil',
      autor: 'Boris Fausto',
      categoria: 'História',
      descricao: 'Uma visão geral dos principais acontecimentos da história brasileira.',
      capa: 'https://covers.openlibrary.org/b/title/Historia%20do%20Brasil-L.jpg',
      favorito: false
    },
  ]);

  emprestimos = signal<Livro[]>([]);

  historicoEmprestimos = signal<RegistroEmprestimo[]>(
    JSON.parse(
      localStorage.getItem('historicoEmprestimos') || '[]'
    )
  );

  favoritos = computed(() =>
    this.livros().filter(livro => livro.favorito)
  );

  adicionarLivro(livro: Livro): void {
    this.livros.update(lista => [
      ...lista,
      {
        ...livro,
        id: Date.now()
      }
    ]);
  }

  removerLivro(id: number): void {
    this.livros.update(lista =>
      lista.filter(livro => livro.id !== id)
    );
  }

  alternaFavorito(id: number): void {
    this.livros.update(lista =>
      lista.map(livro =>
        livro.id === id
          ? { ...livro, favorito: !livro.favorito }
          : livro
      )
    );
  }

  adicionarEmprestimo(livro: Livro): boolean {
    if (!this.auth.estaLogado()) {
      return false;
    }

    this.emprestimos.update(lista => {
      if (lista.some(item => item.id === livro.id)) {
        return lista;
      }

      return [...lista, livro];
    });

    return true;
  }

  removerEmprestimo(id: number): void {
    this.emprestimos.update(lista =>
      lista.filter(livro => livro.id !== id)
    );
  }

  confirmarEmprestimo(
    dataRetirada: string,
    localRetirada: string
  ): boolean {
    if (!this.auth.estaLogado()) {
      return false;
    }

    const livrosSelecionados = this.emprestimos();

    if (
      livrosSelecionados.length === 0 ||
      !dataRetirada ||
      !localRetirada
    ) {
      return false;
    }

    const novoEmprestimo: RegistroEmprestimo = {
      livros: [...livrosSelecionados],
      data: new Date().toLocaleString('pt-BR'),
      dataRetirada,
      localRetirada
    };

    const historicoAtualizado = [
      ...this.historicoEmprestimos(),
      novoEmprestimo
    ];

    this.historicoEmprestimos.set(historicoAtualizado);

    localStorage.setItem(
      'historicoEmprestimos',
      JSON.stringify(historicoAtualizado)
    );

    this.emprestimos.set([]);

    return true;
  }
}
