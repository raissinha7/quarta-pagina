import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Livros } from './../../services/livros';

@Component({
  selector: 'app-favoritos',
  imports: [RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class FavoritosComponent {

  private livrosService = inject(Livros);

  favoritos = this.livrosService.favoritos;

  removerFavorito(id: number) {
    this.livrosService.alternaFavorito(id);
  }
}