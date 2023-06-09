import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserUpdate } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  user: User = {id: 0, username: '', email:'', adresse:'', phone_number:'' }

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      this.userService.getUser(params['id']).subscribe( data => {
        this.user = data
      })
    })

    const userId = localStorage.getItem('UserId');
  
    if (userId) {
      const id = Number(userId);
      this.getUser(id);
    } else {
      console.log('WOW');
    }
  }

  getUser(id: number): void {

    console.log(id)

    this.userService.getUser(id).subscribe(
      {
        next: (user: User) => {
          this.user = user;
          console.log(this.user); // Affiche les données de l'utilisateur dans la console
        },
        error: (error) => {
          console.log(error); // Gère les erreurs en cas de problème de requête
        },
        complete: () => {
          // Optionnel : Gère l'événement de complétion de l'observable
        }
      }
    );
  }

  update(id: number) {
    this.userService.EditUser(id, this.user)
      .subscribe({
        next: (response: UserUpdate) => {
          // Gérer la réponse réussie ici
          console.log('Mise à jour réussie :', response);
          this.router.navigate(['/profile'])
        },
        error: (error: any) => {
          // Gérer les erreurs ici
          console.error(error);
        }
      });
  }

}
