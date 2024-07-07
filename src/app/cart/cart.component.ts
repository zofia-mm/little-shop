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
  cartItems = new Map<number, Product>;
  cartAmounts = this.cart.items;

  ngOnInit(): void {
    this.cart.items.forEach( (_, productId) => {
      this.productService.getProduct( productId )
        .subscribe( it => { this.cartItems?.set( productId, it ) });
    } );
  }
}
