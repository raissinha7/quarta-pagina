import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { Menu } from './features/menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, Header, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
