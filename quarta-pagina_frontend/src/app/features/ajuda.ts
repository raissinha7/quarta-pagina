
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ajuda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajuda.html',
  styleUrl: './ajuda.css'
})
export class Ajuda {
  pesquisa = '';

  perguntas = [
    {
      pergunta: 'Como faço meu cadastro?',
      resposta: 'Acesse a página de cadastro, preencha seus dados pessoais e crie sua conta para utilizar a biblioteca.'
    },
    {
      pergunta: 'Como faço login na biblioteca?',
      resposta: 'Acesse a opção Entrar e informe seu e-mail e sua senha cadastrados.'
    },
    {
      pergunta: 'Como encontro um livro?',
      resposta: 'Utilize a barra de pesquisa ou escolha um dos gêneros disponíveis no catálogo.'
    },
    {
      pergunta: 'Como faço um empréstimo?',
      resposta: 'Escolha o livro desejado no catálogo e solicite o empréstimo. A retirada do livro é realizada presencialmente na biblioteca.'
    },
    {
      pergunta: 'Como funciona a devolução?',
      resposta: 'A devolução deve ser realizada presencialmente na biblioteca, respeitando o prazo informado no empréstimo.'
    },
    {
      pergunta: 'Como adicionar livros aos favoritos?',
      resposta: 'Acesse o catálogo e utilize a opção de favoritar para guardar os livros que deseja encontrar facilmente.'
    },
    {
      pergunta: 'Como alterar meus dados pessoais?',
      resposta: 'Entre na opção Minha Conta e escolha editar perfil para atualizar suas informações.'
    },
    {
      pergunta: 'Como recuperar minha senha?',
      resposta: 'Na tela de login, acesse a opção Esqueci minha senha e siga as instruções.'
    }
  ];

  get perguntasFiltradas() {
    return this.perguntas.filter(item =>
      item.pergunta.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }
}
