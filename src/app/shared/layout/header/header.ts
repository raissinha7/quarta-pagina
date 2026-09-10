import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from '../../../features/menu/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, Menu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
}
