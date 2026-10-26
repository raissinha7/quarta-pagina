
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../core/models/livro.model';
import { Auth } from '../services/auth';
import { Livros } from '../services/livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.html',
  styleUrl: './livros.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LivrosComponent {
  private readonly livrosService = inject(Livros);
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  private readonly queryParamMap = toSignal(
    this.route.queryParamMap,
    {
      initialValue: this.route.snapshot.queryParamMap
    }
  );

  readonly livrosFiltrados = computed(() => {
    const params = this.queryParamMap();
    const busca =
      params.get('busca')?.trim().toLocaleLowerCase() ?? '';
    const genero =
      params.get('genero')?.trim().toLocaleLowerCase() ?? '';

    return this.livrosService.livros().filter(livro => {
      const correspondeBusca =
        busca === '' ||
        [livro.titulo, livro.autor, livro.genero]
          .some(valor =>
            valor.toLocaleLowerCase().includes(busca)
          );

      const correspondeGenero =
        genero === '' ||
        livro.genero.toLocaleLowerCase() === genero;

      return correspondeBusca && correspondeGenero;
    });
  });

  favoritar(id: number): void {
    this.livrosService.alternaFavorito(id);
  }

  emprestar(livro: Livro): void {
    if (!this.auth.estaLogado()) {
      localStorage.setItem(
        'livroPendenteEmprestimo',
        JSON.stringify(livro)
      );

      this.router.navigate(['/login']);
      return;
    }

    this.livrosService.adicionarEmprestimo(livro);
    this.router.navigate(['/emprestimos']);
  }
}

export { LivrosComponent as Livros };
