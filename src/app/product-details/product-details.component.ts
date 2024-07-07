import { Component, OnInit } from '@angular/core';
import { Product } from '../data/interfaces/product';
import { ProductsService } from '../data/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductCart } from '../data/interfaces/product-cart';
import { CartService } from '../data/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit
{
  productCart: ProductCart | undefined;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number( this.route.snapshot.paramMap.get( 'id' ) );
    this.productService.getProduct( id ).subscribe(
      it => this.productCart = { product: it, amount: 1 }
    );
  }

  navigateBack() {
    this.location.back();
  }

  addToCart() {
    this.cartService.addToCart( this.productCart! )
  }
}
