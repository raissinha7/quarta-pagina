
import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);

  @ViewChild('trilhoLivros')
  trilhoLivros!: ElementRef<HTMLDivElement>;

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

  rolarCarrossel(direcao: number) {
    this.trilhoLivros.nativeElement.scrollBy({
      left: direcao * 400,
      behavior: 'smooth'
    });
  }
}
