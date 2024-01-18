import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { MyMiniCartModule } from "./my-mini-cart/my-mini-cart.module";
import { MyCartModule } from "./my-cart/my-cart.module";
import { MyBannerModule } from "./my-banner/my-banner.module";
import { SalesDetailModule } from "./pages/sales-detail/sales-detail.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    MyMiniCartModule,
    MyCartModule,
    MyBannerModule,
    SalesDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
