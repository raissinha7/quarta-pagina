import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Livros } from '../../services/livros';

@Component({
  selector: 'app-adicionar-livros',
  imports: [FormsModule],
  templateUrl: './adicionar-livros.html',
  styleUrl: './adicionar-livros.css',
})
export class AdicionarLivros {
  private livrosService= inject(Livros);
  private router = inject(Router);

titulo = '';
  autor = '';
  genero = '';
  descricao = '';
  capa = '';

  adicionar() {
    this.livrosService.adicionarLivro({
      id: 0,
      titulo: this.titulo,
      autor: this.autor,
      genero: this.genero,
      descricao: this.descricao,
      capa: this.capa,
      favorito: false,
    });
    alert('Livro adicionado com sucesso!');
    this.router.navigate(['/livros']);
  }
}
