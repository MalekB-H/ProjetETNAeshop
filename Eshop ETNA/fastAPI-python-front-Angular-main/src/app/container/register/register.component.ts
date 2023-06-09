import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Inject } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: '',
    email: '',
    adresse: '',
    phone_number: '',
    id: 0
  }

  constructor(
    @Inject(AuthService) private authService: AuthService,
    private router: Router
    ) {}
  
  register(): void {
    this.authService.register(this.user).subscribe(
      {
        next : (newUser: any) => {
          // Traitement de la réponse de l'API ici
          console.log(newUser);
          this.router.navigateByUrl('/login')
        },
        error : (error: any) => {
          // Gestion des erreurs ici
          console.error(error);
        }
      }
    );
  }
}
