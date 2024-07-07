import { Component } from '@angular/core';
import { CartService } from '../data/services/cart.service';
import { ProductsService } from '../data/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent
{
  constructor(
    private cart: CartService,
    private productService: ProductsService
  ) {}
  
  cartItems = this.cart.items;
}
