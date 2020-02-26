 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string ;
  product: IProduct;
  errorMessage = "";
  private _albums: any = [];
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private _lightbox: Lightbox) {
    const param = this.route.snapshot.paramMap.get("name");
    for (let i = 1; i <= 3; i++) {
      const src = 'assets/img/gallery/'+ param + '/'+ param + i + '.png';
      const caption = param + i;
      const thumb = 'assets/img/gallery/'+ param + '/'+ param + i + '.png';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
    }
  }

  ngOnInit() {
    /*let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {"productId":10,"productName":"Video Game Controller","productCode":"GMG-0042","releaseDate":"October 15, 2018","description":"Standard two-button video game controller","price":35.95,"starRating":4.6,"imageUrl":"assets/images/xbox-controller.png"}*/
    const param = this.route.snapshot.paramMap.get("name");
    if(param) {
      const id = param;
      this.getProduct(id);
    }
  }

  getProduct(id: string) {
    this.productService.getUniqueProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    })
  }

  onRatingClicked(msg: string): void {
    this.pageTitle = "Product List: " + msg;
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

  onContact(): void {
    this.router.navigate(['/contact'])
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
