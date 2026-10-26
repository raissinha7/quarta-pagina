
import { Routes } from '@angular/router';

import { Login } from './features/login/login/login';
import { LoginAdmin } from './features/login-bibliotecario/login-admin';
import { Home } from './features/home/home';
import { LivrosComponent } from './livros/livros';
import { FavoritosComponent } from './features/favoritos/favoritos';
import { AdicionarLivros } from './features/adicionar-livros/adicionar-livros';
import { Cadastro } from './features/cadastro/cadastro';
import { Emprestimos } from './emprestimos/emprestimos';
import { Menu } from './features/menu/menu';
import { FinalizarEmprestimo } from './emprestimos/finalizar-emprestimo/finalizar-emprestimo';
import { MinhaConta } from './features/minha-conta/minha-conta';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: Menu
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'login-admin',
    component: LoginAdmin
  },
  {
    path: 'cadastro',
    component: Cadastro
  },
  {
    path: 'livros',
    component: LivrosComponent,
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
  },
  {
    path: 'adicionar',
    component: AdicionarLivros,
  },

  {
    path: 'emprestimos',
    component: Emprestimos,
  },
  {
    path: 'finalizar-emprestimo',
    component: FinalizarEmprestimo
  },
  {
    path: 'minha-conta',
    component: MinhaConta
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
