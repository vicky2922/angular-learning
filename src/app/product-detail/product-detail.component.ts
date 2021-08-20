import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products =  PRODUCTS;

  selectedProduct?: Product;

  

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
