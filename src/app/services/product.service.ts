import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productServiceURL = 'https://extended-nodejs-api.herokuapp.com';
  //private productServiceURL = window.location.protocol+'//'+window.location.host;
  //private productServiceURL = 'http://68.66.207.139:4444';
  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productServiceURL + '/api/products/').pipe(
      tap(data => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  getUniqueProduct(id: string):Observable<IProduct | undefined>{
    return this.getProducts()
    .pipe(
      map((products: IProduct[]) => products.find(p => p.url == id))
    )
  }

  sendMail(maildata) {
    return this.http.post<any>(this.productServiceURL + '/api/mail', maildata).pipe(
      tap(data => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError) 
    )
  }

  private handleError(err: HttpErrorResponse){
    console.log(`Server return code: ${err.status}, error message is: ${err.message}`);
    return throwError(`Error message is: ${err.message}`)
  }

}  
