import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  private _cart: Cart = { items : [] }
  itemsQuantity = 0

  search: string = ''

  @Input()
  get cart(): Cart {
    return this._cart
  }

  set cart(cart: Cart) {
    this._cart = cart
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  constructor(private cartService: CartService) {} 

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClearCart() {
    this.cartService.clearCart()
  }

  truncateName(name: string): string {
    const maxCharacters = 10; // Nombre maximal de caractères pour le nom
    const truncationIndicator = '...';
  
    if (name.length <= maxCharacters) {
      return name;
    }
  
    const truncatedName = name.slice(0, maxCharacters - truncationIndicator.length) + truncationIndicator;
  
    return truncatedName;
  }

  onClickSearch(): void {
    window.location.href = "/products"
  }

}

// import { Component, Input } from '@angular/core';
// import { Cart, CartItem } from 'src/app/models/cart.model';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
// })
// export class HeaderComponent {
//   private _cart: Cart = { items: [] };
//   itemsQuantity = 0;

//   @Input()
//   get cart(): Cart {
//     return this._cart;
//   }

//   set cart(cart: Cart) {
//     this._cart = cart;

//     this.itemsQuantity = cart.items
//       .map((item) => item.quantity)
//       .reduce((prev, curent) => prev + curent, 0);
//   }

//   constructor(private cartService: CartService) {}

//   getTotal(items: CartItem[]): number {
//     return this.cartService.getTotal(items);
//   }

//   onClearCart(): void {
//     this.cartService.clearCart();
//   }
// }
