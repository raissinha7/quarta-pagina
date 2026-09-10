import { Routes } from '@angular/router';

import { Login } from './features/login/login/login';
import { Home } from './features/home/home';
import { LivrosComponent } from './livros/livros';
import { FavoritosComponent } from './features/favoritos/favoritos';
import { AdicionarLivros } from './features/adicionar-livros/adicionar-livros';
import { Cadastro } from './features/cadastro/cadastro';
import { Emprestimos } from './emprestimos/emprestimos';
import { Menu } from './features/menu/menu';

// AUTH GUARD
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // NÃO precisa estar logado
  {
    path: 'login',
    component: Login
  },

  // NÃO precisa estar logado
  {
    path: 'cadastro',
    component: Cadastro
  },

  // PRECISA estar logado
  {
    path: 'menu',
    component: Menu
  },

  {
    path: 'home',
    component: Home,
    canActivate: [authGuard]
  },

  {
    path: 'livros',
    component: LivrosComponent,
    canActivate: [authGuard]
  },

  {
    path: 'favoritos',
    component: FavoritosComponent,
    canActivate: [authGuard]
  },

  {
    path: 'adicionar',
    component: AdicionarLivros,
    canActivate: [authGuard]
  },

  {
    path: 'emprestimos',
    component: Emprestimos,
    canActivate: [authGuard]
  },

  // Se escrever uma rota que não existe
  {
    path: '**',
    redirectTo: 'login'
  }

];
