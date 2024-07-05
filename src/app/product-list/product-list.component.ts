import { Component } from '@angular/core';
import { PRODUCTS } from '../data/sources/mock-products';
import { Product } from '../data/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent
{
  products: Product[] = PRODUCTS;
}
