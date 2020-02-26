import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-details/product-detail.component';
import { SpicesComponent } from './spices/spices.component';
import { DhalsComponent } from './dhals/dhals.component';
import { FreshProduceComponent } from './fresh-produce/fresh-produce.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SpicesComponent,
    DhalsComponent,
    FreshProduceComponent
  ],
  imports: [ 
    ProductsRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class ProductsModule { }
