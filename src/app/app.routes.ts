import { Routes } from '@angular/router';

import { Login } from './features/login/login/login';
import { Home } from './features/home/home';
import { LivrosComponent } from './livros/livros';
import { FavoritosComponent } from './features/favoritos/favoritos';
import { AdicionarLivros } from './features/adicionar-livros/adicionar-livros';
import { Cadastro } from './features/cadastro/cadastro';
import { Emprestimos } from './emprestimos/emprestimos';
import { Menu } from './features/menu/menu';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'menu',
    component: Menu
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'livros',
    component: LivrosComponent
  },

  {
    path: 'favoritos',
    component: FavoritosComponent
  },

  {
    path: 'adicionar',
    component: AdicionarLivros
  },
  {
  path: 'cadastro',
  component: Cadastro
},
{
  path: 'emprestimos',
  component: Emprestimos
},
];
