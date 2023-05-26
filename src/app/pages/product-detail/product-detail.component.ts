import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageItem } from 'ng-gallery';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  currentId!: string;
  currentProduct$!: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) {

  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["productId"];
    this.currentProduct$ = this.productService.getAProductById(id);
  }

  getGalleryImages(product: any) {
    const gallery: any[] = [];
    product?.images?.forEach((image: any) => {
      gallery.push(new ImageItem({ src: image, thumb: image }))
    })
    return gallery;
  }

}
