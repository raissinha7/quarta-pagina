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

  irParaLivros() {
    this.router.navigate(['/livros']);
  }

  buscarLivro(event: Event) {
    const input = event.target as HTMLInputElement;
    const busca = input.value.trim();

    if (busca) {
      this.router.navigate(['/livros'], {
        queryParams: { busca: busca }
      });
    }
  }

}
