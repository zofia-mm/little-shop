import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  private productsUrl = 'api/products';
  constructor(
    private http: HttpClient
  ) {}

  private handleError<T>( operation = 'operation', result?: T ) {
    return ( error: any ): Observable<T> => {
      console.error( `ProductsService: ${operation} failed: ${error.message}` );
      return of( result as T );
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>( this.productsUrl ).pipe(
      catchError( this.handleError<Product[]>( 'getProducts', [] ) )
    );
  }

  getProduct( id: number ): Observable<Product> {
    const url = `${ this.productsUrl }/${ id }`;
    return this.http.get<Product>( url ).pipe(
      catchError( this.handleError<Product>( 'getProduct' ) )
    );
  }
}
