import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Feature modules
import { ProductsModule } from './products/products.module';

import { HttpInterceptorService } from './http-interceptor.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent, 
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'edayexportz' }),
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    ReactiveFormsModule,
    LightboxModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
