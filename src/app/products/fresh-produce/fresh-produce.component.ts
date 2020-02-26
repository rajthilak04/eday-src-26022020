import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../../services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fresh-produce',
  templateUrl: './fresh-produce.component.html',
  styleUrls: ['./fresh-produce.component.css']
})
export class FreshProduceComponent implements OnInit {

  products: IProduct[] = [];
  errorMessage: string; 

  constructor(private productService: ProductService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
    this.spinner.show();
    this.productService.getProducts().subscribe({
      next: products => {
        var data = products;
        for(var d in data){
          if(data[d].type == 2){
            this.products.push(data[d])
          }
        }
        this.spinner.hide();
      },
      error: err => this.errorMessage = err
    })
  }

  onNavigate(url): void {
    this.router.navigate(['/products/' + url]);
  }

  onEnq(url): void {
    this.router.navigate(['/contact']);
  }

}
