import { Component, OnInit } from '@angular/core';
import { Product } from '../data/interfaces/product';
import { ProductsService } from '../data/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit
{
  product: Product | undefined;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number( this.route.snapshot.paramMap.get( 'id' ) );
    this.productService.getProduct( id ).subscribe(
      it => this.product = it
    );
  }
}
