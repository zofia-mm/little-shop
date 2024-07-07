import { Injectable } from '@angular/core';
import { ProductCart } from '../interfaces/product-cart';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService
{
  items = new Map<Product, number>;

  addToCart( productCart: ProductCart ) {
    const product = productCart.product;

    if( this.items.has( product ) ) {
      this.items.set( product, this.items.get( product )! + productCart.amount );
      return;
    }

    this.items.set( productCart.product, productCart.amount );
  }
}
