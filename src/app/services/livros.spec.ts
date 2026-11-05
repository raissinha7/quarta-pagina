import { TestBed } from '@angular/core/testing';

import { Livros } from './livros';

describe('Livros', () => {
  let service: Livros;

  beforeEach(() => {
    localStorage.removeItem('livroPendenteEmprestimo');
    localStorage.removeItem('livroPendenteFavorito');
    localStorage.removeItem('retornarAoEmprestimo');
    localStorage.setItem('quartapaginaLogado', 'true');
    TestBed.configureTestingModule({});
    service = TestBed.inject(Livros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should apply and clear a favorite requested before authentication', () => {
    localStorage.setItem('livroPendenteFavorito', '1');

    expect(service.processarAcaoPendente()).toBe('favorito');
    expect(service.livros().find(livro => livro.id === 1)?.favorito).toBe(true);
    expect(localStorage.getItem('livroPendenteFavorito')).toBeNull();
  });

  it('should add and clear a rental requested before authentication', () => {
    const livro = service.livros()[0];
    localStorage.setItem('livroPendenteEmprestimo', JSON.stringify(livro));

    expect(service.processarAcaoPendente()).toBe('aluguel');
    expect(service.emprestimos()).toContain(livro);
    expect(localStorage.getItem('livroPendenteEmprestimo')).toBeNull();
  });
});
