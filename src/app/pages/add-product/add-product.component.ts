import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {

  }
  ngOnInit(): void {

  }

  onFormSubmit(f: NgForm) {

    const form = f.form.value;
    this.productService.addNewProduct(form).pipe(
      tap(() => {
        // this.router.navigate(['/'], { queryParams: { submitted: true } })
        this.router.navigate(['/home'])
        this.productService.formSubmitted$.next(true);
      }),
      take(1),
    ).subscribe()
  }

}
