import { Component, inject } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);

  pesquisar(termo: string) {
    const busca = termo.trim();

    if (busca !== '') {
      this.router.navigate(['/livros'], {
        queryParams: { busca: busca }
      });
    }
  }
}
