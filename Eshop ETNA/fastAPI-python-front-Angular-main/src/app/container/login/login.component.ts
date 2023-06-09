import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(
    private _authService: AuthService,
    private router: Router
    ) {}

  login(): void {
    this._authService.login(this.username, this.password).subscribe(
      {
        next: (response) => {
          // Traitement de la réponse de l'API ici
          localStorage.setItem('UserToken', response.access_token)
          localStorage.setItem('UserId', response.id)
          this.router.navigateByUrl('/products')
        },
        error: (error) => {
          // Gestion des erreurs ici
          console.error(error);
        }
      }
    );
  }
}








