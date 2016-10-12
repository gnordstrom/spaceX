import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DragonComponent } from './dragon/dragon.component';
import { Falcon9Component } from './falcon9/falcon9.component';
import { FalconHeavyComponent } from './falcon-heavy/falcon-heavy.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Falcon9Component,
    FalconHeavyComponent,
    DragonComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
