import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService
{
  items = new Map<number, number>; // productId => amount

  addToCart( productId: number, amount: number ) {
    if( this.items.has( productId ) ) {
      this.items.set( productId, this.items.get( productId )! + amount );
      return;
    }

    this.items.set( productId, amount );
  }
}
