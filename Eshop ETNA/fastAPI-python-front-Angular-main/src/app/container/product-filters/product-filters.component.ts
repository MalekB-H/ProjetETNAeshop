import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/service/store/store.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent implements OnInit, OnDestroy {

  @Output() showCategory = new EventEmitter<string>()
  @Output() showSize = new EventEmitter<number>()

  sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
  categories = ['Adidas', 'Nike', 'Converse', 'New Balance', 'Collab', 'Custom']
  categoriesSubscription: Subscription | undefined
  // categories: Array<string> | undefined //une fois que c'est codé dans le back, on recup les infos comme ca pour remplacer la première ligne

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
      this.categoriesSubscription = this.storeService.getAllBrand().subscribe((response) => this.categories = response)
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  } 

  onShowSize(size: number): void {
    this.showSize.emit(size)
  }


  ngOnDestroy(): void {
      if(this.categoriesSubscription) {
        this.categoriesSubscription.unsubscribe()
      }
  }

}
