
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Livros } from '../../services/livros';

interface CepResponse {
  cep?: string;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  private router = inject(Router);
  private auth = inject(Auth);
  private livrosService = inject(Livros);

  nome = '';
  email = '';
  senha = '';
  telefone = '';
  celular = '';
  cep = '';
  logradouro = '';
  numero = '';
  bairro = '';
  cidade = '';
  estado = '';
  complemento = '';
  preencherEnderecoManual = false;
  enderecoLocalizado = false;
  consultandoCep = false;
  erroCep = '';

  private cepConsultado = '';
  private consultaCepId = 0;

  formatarTelefone(valor: string): void {
    this.telefone = this.formatarNumeroNacional(valor, 10, 4);
  }

  formatarCelular(valor: string): void {
    this.celular = this.formatarNumeroNacional(valor, 11, 5);
  }

  private formatarNumeroNacional(
    valor: string,
    maxDigitos: number,
    digitosAntesHifen: number
  ): string {
    const digitos = valor.replace(/\D/g, '').slice(0, maxDigitos);

    if (digitos.length <= 2) {
      return digitos ? `(${digitos}` : '';
    }

    const ddd = digitos.slice(0, 2);
    const numero = digitos.slice(2);
    const parteInicial = numero.slice(0, digitosAntesHifen);
    const parteFinal = numero.slice(digitosAntesHifen);

    return `(${ddd}) ${parteInicial}${parteFinal ? `-${parteFinal}` : ''}`;
  }

  async consultarCep(cepInformado = this.cep): Promise<void> {
    const cepNumerico = cepInformado.replace(/\D/g, '');

    if (cepNumerico.length !== 8) {
      this.erroCep = 'Digite um CEP válido com 8 números.';
      return;
    }

    if (this.enderecoLocalizado && this.cepConsultado === cepNumerico) {
      return;
    }

    const consultaId = ++this.consultaCepId;
    this.consultandoCep = true;
    this.erroCep = '';

    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepNumerico}/json/`
      );

      if (consultaId !== this.consultaCepId) {
        return;
      }

      if (!resposta.ok) {
        throw new Error(`Consulta de CEP falhou com status ${resposta.status}.`);
      }

      const dados: CepResponse = await resposta.json();

      if (consultaId !== this.consultaCepId) {
        return;
      }

      if (dados.erro) {
        this.erroCep = 'CEP não encontrado. Confira o número ou preencha o endereço manualmente.';
        return;
      }

      this.cep = dados.cep ?? this.cep;
      this.logradouro = dados.logradouro ?? '';
      this.bairro = dados.bairro ?? '';
      this.cidade = dados.localidade ?? '';
      this.estado = dados.uf ?? '';
      this.cepConsultado = cepNumerico;
      this.enderecoLocalizado = true;
    } catch (erro) {
      if (consultaId !== this.consultaCepId) {
        return;
      }

      console.error('Erro ao consultar o CEP:', erro);
      this.erroCep = 'Não foi possível consultar o CEP. Tente novamente ou preencha o endereço manualmente.';
    } finally {
      if (consultaId === this.consultaCepId) {
        this.consultandoCep = false;
      }
    }
  }

  alterarCep(cep: string): void {
    const cepNumerico = cep.replace(/\D/g, '');

    if (cepNumerico !== this.cepConsultado) {
      this.enderecoLocalizado = false;
      this.cepConsultado = '';
      this.logradouro = '';
      this.bairro = '';
      this.cidade = '';
      this.estado = '';
      this.erroCep = '';
      this.consultaCepId++;
      this.consultandoCep = false;
    }

    if (
      !this.preencherEnderecoManual &&
      cepNumerico.length === 8 &&
      cepNumerico !== this.cepConsultado
    ) {
      void this.consultarCep(cep);
    }
  }

  alternarEnderecoManual(): void {
    this.preencherEnderecoManual = !this.preencherEnderecoManual;
    this.erroCep = '';

    if (!this.preencherEnderecoManual && this.cep.replace(/\D/g, '').length === 8) {
      void this.consultarCep();
    }
  }

  cadastrar(): void {
    const nomeDigitado = this.nome.trim();
    const emailDigitado = this.email.trim().toLowerCase();
    const senhaDigitada = this.senha.trim();
    const telefoneDigitos = this.telefone.replace(/\D/g, '');
    const celularDigitos = this.celular.replace(/\D/g, '');
    const cepNumerico = this.cep.replace(/\D/g, '');
    const enderecoDigitado = [
      this.logradouro.trim(),
      this.numero.trim(),
      this.complemento.trim(),
      this.bairro.trim(),
      this.cidade.trim(),
      this.estado.trim()
    ].filter(Boolean).join(', ');

    if (
      !nomeDigitado ||
      !emailDigitado ||
      !senhaDigitada ||
      (telefoneDigitos.length !== 0 && telefoneDigitos.length !== 10) ||
      celularDigitos.length !== 11 ||
      !this.logradouro.trim() ||
      !this.numero.trim() ||
      !this.bairro.trim() ||
      !this.cidade.trim() ||
      !this.estado.trim() ||
      (!this.preencherEnderecoManual && cepNumerico.length !== 8)
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    this.auth.cadastrar(
      nomeDigitado,
      emailDigitado,
      senhaDigitada,
      enderecoDigitado,
      this.telefone.trim(),
      this.celular.trim(),
      cepNumerico
    );

    alert('Cadastro realizado com sucesso!');

    let acaoPendente: 'aluguel' | 'favorito' | null;

    try {
      acaoPendente = this.livrosService.processarAcaoPendente();
    } catch (erro) {
      console.error('Erro ao processar a ação pendente:', erro);
      alert('Seu cadastro foi realizado, mas não foi possível concluir a ação no livro.');
      this.router.navigate(['/home']);
      return;
    }

    if (acaoPendente === 'aluguel') {
      this.router.navigate(['/emprestimos']);
      return;
    }

    if (acaoPendente === 'favorito') {
      this.router.navigate(['/favoritos']);
      return;
    }

    this.router.navigate(['/home']);
  }

  voltarLogin(): void {
    this.router.navigate(['/login']);
  }
}
