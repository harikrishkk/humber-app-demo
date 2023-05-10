import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$!: Observable<any>;
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProductsByCategories();
  }

  getCategories(products: any) {
    return Object.keys(products);
  }
}
