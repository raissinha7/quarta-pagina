
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);

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
