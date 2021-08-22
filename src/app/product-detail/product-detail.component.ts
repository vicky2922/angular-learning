import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products : Product[] = [];

  //selectedProduct?: Product;

  

  constructor(private productService : ProductService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  /*
  getting data from service
  */
  getProducts(): void{
    this.productService.getProducts()
          .subscribe(products => this.products = products);
  }
/*
  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`ProductDetailComponent: selected product id = ${product.id}`)
  }
*/
}
