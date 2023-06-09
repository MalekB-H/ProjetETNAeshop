import { HttpClient } from '@angular/common/http';
import { STRING_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

const STORE_BASE_URL = 'http://127.0.0.1:8000'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProduct(limit = '12', sort = 'desc', category?: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/posts?
        ${ category  ? '/unPeuLaFlemme/' + category : ''}
        sort=${sort}&limit=${limit}`
    )
  }

  // Il faut créer la route dans le back, flemme (la même au dessus)
  getAllBrand(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${STORE_BASE_URL}/unPeuLaFlemme`)
  }
}
