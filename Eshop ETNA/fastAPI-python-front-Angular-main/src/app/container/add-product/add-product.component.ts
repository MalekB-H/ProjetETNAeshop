import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product = {
    id: 0,
    description: '',
    name: '',
    user_id: 0,
    price: 0,
    image: '',
    inventory: 0,
    public: true,
    created_at: ''
}

constructor(
  private http: HttpClient
  ) {}

  addProduct() {
    const token = window.localStorage.getItem('UserToken'); // Récupérer le jeton JWT depuis le localStorage
  
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Ajouter l'en-tête d'autorisation avec le jeton JWT
  
      this.http.post('http://127.0.0.1:8000/posts', this.product, { headers })
        .subscribe({
          next: response => {
            // Réponse du backend en cas de succès
            console.log(response);
            // Réinitialiser le formulaire ou effectuer d'autres actions
          },
          error: error => {
            // Gérer les erreurs en cas d'échec de la requête
            console.error(error);
          }
        });
    } else {
      console.error('Token is not available in localStorage.');
    }
  }

}
