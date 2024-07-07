import { Component } from '@angular/core';
import { CartService } from '../data/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent
{
  constructor( private cart: CartService ) {}
  cartItems = this.cart.items;
}
