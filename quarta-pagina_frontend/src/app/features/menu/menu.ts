import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})

export class Menu {

 // Controla se o menu está visível ou não
  menuAberto: boolean = false;

  // Função que inverte o estado (se tá fechado, abre; se tá aberto, fecha)
  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

}
