import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart/cart.service';
import { StoreService } from 'src/app/service/store/store.service';


const ROWS_HEIGHT: { [id:number]: number } = {1: 400, 3: 335, 4: 350}
const UserId = localStorage.getItem('UserId')

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() item: Product = {id: 0, description: "", name: "", user_id: 0, price: 0, image:"", inventory: 0, public: false, created_at: ""}



  cols = 3
  category: string | undefined
  rowHeight = ROWS_HEIGHT[this.cols]
  products: Array<Product> | undefined
  sort = 'desc'
  // le count donne le nombre d'item à afficher par page
  count = '36'
  productsSubscription: Subscription | undefined

  constructor(
    private cartService: CartService,
    private storeService: StoreService
    ) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProduct(this.count, this.sort, this.category).subscribe((_products) => {
      this.products = _products
    })
  }


  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber 
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  onItemsCountChange(newcount: number): void {
    this.count = newcount.toString()
    this.getProducts()
  }

  onSortChange(newsort: string): void {
    this.sort = newsort
    this.getProducts()
  }

  // Ca sert a ne pas overflow la mémoire avec trop de subscribe
  ngOnDestroy(): void {
      if (this.productsSubscription) {
        this.productsSubscription.unsubscribe()
      }
  }

  redirectToUrl1() {
    window.location.href = 'https://www.sothebys.com/en/buy/auction/2020/adidas-x-meissen-centuries-of-expertise/adidas-meissen-zx8000-porcelain'
  }

  redirectToUrl2() {
    window.location.href = 'https://jasonmarkk.com/'
  }

}
