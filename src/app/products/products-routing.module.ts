import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-details/product-detail.component';
import { SpicesComponent } from './spices/spices.component';
import { DhalsComponent } from './dhals/dhals.component';
import { FreshProduceComponent } from './fresh-produce/fresh-produce.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [        
        { path: 'products', component: ProductListComponent },
        { path: 'products/:name', component: ProductDetailComponent},      
        { path: 'spices', component: SpicesComponent},     
        { path: 'dhals', component: DhalsComponent},     
        { path: 'fresh-produce', component: FreshProduceComponent},     
      ]
    )
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
