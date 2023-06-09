import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, updatedProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-product-update-form',
  templateUrl: './product-update-form.component.html',
  styleUrls: ['./product-update-form.component.css']
})
export class ProductUpdateFormComponent implements OnInit {
  product: updatedProduct = { name: '', price: 0, description: '', inventory: 0, image: '', id: 0 }

  constructor( 
    private http: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = localStorage.getItem('ProductId');
  
    if (productId !== null) {
      const id = parseInt(productId, 10);
  
      this.productService.getProduct(id).subscribe({
        next: product => {
          this.product = product;
        },
        error: error => {
          console.error('Error retrieving product:', error);
        }
      });
    } else {
      console.log('ProductId is null');
    }
  }

  onEditProduct() {
    const productId = localStorage.getItem('ProductId');
    const token = localStorage.getItem('UserToken');
  
    if (productId !== null && token !== null) {
      const id = parseInt(productId, 10);
  
      const updatedPost: updatedProduct = {
        name: this.product.name,
        price: this.product.price,
        description: this.product.description,
        inventory: this.product.inventory,
        image: this.product.image,
        id: id // Utilisation de l'ID récupéré du localStorage
      };
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      this.http.put(`http://127.0.0.1:8000/posts/${id}`, updatedPost, { headers }).subscribe({
        next: response => {
          console.log('Product updated successfully:', response);
          // Traitez la réponse de la mise à jour du produit
        },
        error: error => {
          console.error('Error updating product:', error);
          // Gérez les erreurs de mise à jour du produit
        },
        complete: () => {
          console.log('Product update complete');
        }
      });
    } else {
      console.log('ProductId or UserToken is null');
    }
  }
}
