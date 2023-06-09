import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent {

  cardNumber: string | undefined;
  cardholderName: string | undefined;
  cvv: string | undefined;
  expirationDate: string | undefined;

  constructor(private cartService: CartService, private _snackBar: MatSnackBar) {}

  submitPayment(): void {
    this.cartService.clearCart()
    this._snackBar.open('Merci bg tu gères', 'Je sais', { duration: 3000 })
  }

}
