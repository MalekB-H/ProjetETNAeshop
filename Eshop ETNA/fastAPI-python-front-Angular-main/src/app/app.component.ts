import { Component, OnInit } from '@angular/core';
import { Cart } from './model/cart';
import { CartService } from './service/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  cart: Cart = { items: [] }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      this.cartService.cart.subscribe((_cart) => {
        this.cart = _cart
      })
  }
}
