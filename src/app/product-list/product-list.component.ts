import { Component, OnInit } from '@angular/core';
import { Product } from '../data/interfaces/product';
import { ProductsService } from '../data/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit
{
  products: Product[] | undefined;
  constructor( private productsService: ProductsService ) {}  

  ngOnInit(): void {
    this.productsService.getProducts().subscribe( it => this.products = it );
  }
}
