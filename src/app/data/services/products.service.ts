import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';
import { PRODUCTS } from '../sources/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  getProducts(): Observable<Product[]> {
    return of( PRODUCTS );
  }

  /** id hardcoded to exist! */
  getProduct( id: number ): Observable<Product> {
    return of( PRODUCTS.find( product => product.id == id )! );
  }
}
