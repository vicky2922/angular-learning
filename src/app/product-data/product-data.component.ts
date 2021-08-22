import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {

 // @Input() product?: Product;
 product: Product | undefined;

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() : void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
    .subscribe(prod => this.product=prod);
  }

  goBack(): void {
    this.location.back();
  }

}
