
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Livros } from '../../services/livros';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-finalizar-emprestimo',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './finalizar-emprestimo.html',
  styleUrl: './finalizar-emprestimo.css'
})
export class FinalizarEmprestimo {
  private livrosService = inject(Livros);
  private router = inject(Router);
  private auth = inject(Auth);

  dataMinima = this.obterDataLocal();
  dataRetirada = '';
  localRetirada = '';

  get livrosEmprestados() {
    return this.livrosService.emprestimos();
  }

  private obterDataLocal(): string {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  constructor() {
    if (!this.auth.estaLogado()) {
      alert('Você precisa fazer login para alugar um livro.');
      this.router.navigate(['/login']);
    }
  }

  voltar(): void {
    this.router.navigate(['/emprestimos']);
  }

  confirmarEmprestimo(): void {
    if (!this.auth.estaLogado()) {
      alert('Você precisa fazer login para alugar um livro.');
      this.router.navigate(['/login']);
      return;
    }

    if (this.livrosEmprestados.length === 0) {
      alert('Nenhum livro selecionado para empréstimo.');
      this.router.navigate(['/livros']);
      return;
    }

    if (!this.dataRetirada || !this.localRetirada) {
      alert('Selecione a data e o local de retirada.');
      return;
    }

    if (this.dataRetirada < this.dataMinima) {
      alert('A data de retirada não pode ser anterior a hoje.');
      return;
    }

    const dadosRetirada = {
      livros: this.livrosEmprestados.map(livro => ({
        id: livro.id,
        titulo: livro.titulo,
        autor: livro.autor
      })),
      dataEmprestimo: new Date().toLocaleString('pt-BR'),
      dataRetirada: this.dataRetirada,
      localRetirada: this.localRetirada
    };

    const historicoAtual = JSON.parse(
      localStorage.getItem('historicoEmprestimos') || '[]'
    );

    historicoAtual.push(dadosRetirada);

    localStorage.setItem(
      'historicoEmprestimos',
      JSON.stringify(historicoAtual)
    );

  const sucesso = this.livrosService.confirmarEmprestimo(
  this.dataRetirada,
  this.localRetirada
);

    if (!sucesso) {
      historicoAtual.pop();
      localStorage.setItem(
        'historicoEmprestimos',
        JSON.stringify(historicoAtual)
      );
      alert('Não foi possível confirmar o empréstimo.');
      return;
    }

    alert('Empréstimo confirmado com sucesso!');
    this.router.navigate(['/home']);
  }
}
