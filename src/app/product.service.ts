import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService : MessageService) { }

  getProducts() : Observable<Product[]> {
    const products = of(PRODUCTS);
    this.messageService.add(`ProductService : fetched Products`);
    return products;
  }

  getProduct(id : number) : Observable<Product>{
    const product = PRODUCTS.find(p => p.id===id)!;
    this.messageService.add(`ProductService : fetched product id = ${id}`);
    return of(product);
  }
}
