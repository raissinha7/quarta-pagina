
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './minha-conta.html',
  styleUrl: './minha-conta.css'
})
export class MinhaConta {
  private auth = inject(Auth);
  private router = inject(Router);

  usuario = JSON.parse(
    localStorage.getItem('usuarioCadastro') || 'null'
  );

  constructor() {
    if (!this.auth.estaLogado()) {
      this.router.navigate(['/login']);
    }
  }

  sair(): void {
    this.auth.logout();
    this.usuario = null;
    this.router.navigate(['/home']);
  }
}
