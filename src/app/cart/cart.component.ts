import { Component, OnInit } from '@angular/core';
import { CartService } from '../data/services/cart.service';
import { ProductsService } from '../data/services/products.service';
import { Product } from '../data/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit
{
  constructor(
    private cart: CartService,
    private productService: ProductsService
  ) {}
  cartItems = new Map< number, {product: Product, amount: number} > // productId => Product, amount

  ngOnInit(): void {
    this.cart.items.forEach( (amount, productId) => {
      this.productService.getProduct( productId )
        .subscribe( it => { this.cartItems.set( productId, { product: it, amount: amount } ) });
    } );

    // TODO : remove
    this.productService.getProduct( 2 )
    .subscribe( it => { this.cartItems.set( 2, { product: it, amount: 3 } ) });
  }

  onChangeAmount( newAmount: number, productId: number ) {
    this.cart.changeAmount( productId, newAmount );
  }

  onRemove( productId: number ) {
    this.cartItems.delete( productId );
    this.cart.remove( productId );
  }
}
