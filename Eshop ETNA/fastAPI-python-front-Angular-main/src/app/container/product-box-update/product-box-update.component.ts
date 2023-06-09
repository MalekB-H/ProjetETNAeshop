import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-product-box-update',
  templateUrl: './product-box-update.component.html',
  styleUrls: ['./product-box-update.component.css']
})
export class ProductBoxUpdateComponent {
  shoeSizes: number[] = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  selectedSize: number | undefined;
  isDropdownOpen = false

  showFullDescription = false
  showFullName = false

  constructor( private http: HttpClient, private router: Router) {}

  @Input() fullWidthMode = false

  @Input() product: Product | undefined

  @Output() addToCart = new EventEmitter()

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  RedirectToUpdate() {

    const productId = this.product?.id
    const ProductId: number = productId ?? 0
    localStorage.setItem('ProductId', ProductId.toString())

    this.router.navigate(['/updatePost'])
  }


  onDeleteProduct() {
    const productId = this.product?.id
    const token = localStorage.getItem('UserToken');
  
    if (productId !== undefined && token !== undefined) {
      const id = typeof productId === 'number' ? productId : parseInt(productId, 10);
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      this.http.delete(`http://127.0.0.1:8000/posts/${id}`, { headers }).subscribe({
        next: () => {
          console.log('Product deleted successfully');
          // Traitez la réponse de suppression du produit
        },
        error: error => {
          console.error('Error deleting product:', error);
          // Gérez les erreurs de suppression du produit
        },
        complete: () => {
          console.log('Product deletion complete');
        }
      });
    } else {
      console.log('ProductId or UserToken is null');
    }
  }

}

