import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { StockPipe } from './pipes/stock.pipe';
import { WeekPipe } from './pipes/week.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from './components/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component'
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HoverDirective } from './directives/hover.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AddProductComponent } from './pages/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    StockPipe,
    WeekPipe,
    RatingComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductDetailComponent,
    HoverDirective,
    HighlightDirective,
    UnlessDirective,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
