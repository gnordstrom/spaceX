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
import { DragonIntroComponent } from './dragon/dragon-intro/dragon-intro.component';
import { DragonTopImgComponent } from './dragon/dragon-top-img/dragon-top-img.component';
import { FhTopImgComponent } from './falcon-heavy/fh-top-img/fh-top-img.component';
import { FhIntroComponent } from './falcon-heavy/fh-intro/fh-intro.component';
import { FhMainComponent } from './falcon-heavy/fh-main/fh-main.component';
import { FhTechboxComponent } from './falcon-heavy/fh-techbox/fh-techbox.component';
import { FhBottomCompComponent } from './falcon-heavy/fh-bottom-comp/fh-bottom-comp.component';
import { FhBottomMilestonesComponent } from './falcon-heavy/fh-bottom-milestones/fh-bottom-milestones.component';
import { FhBottomUpdatesComponent } from './falcon-heavy/fh-bottom-updates/fh-bottom-updates.component';
import { Falcon9TopImgComponent } from './falcon9/falcon9-top-img/falcon9-top-img.component';
import { Falcon9IntroComponent } from './falcon9/falcon9-intro/falcon9-intro.component';
import { Falcon9MainComponent } from './falcon9/falcon9-main/falcon9-main.component';
import { Falcon9TechboxComponent } from './falcon9/falcon9-techbox/falcon9-techbox.component';
import { Falcon9BottomMilestonesComponent } from './falcon9/falcon9-bottom-milestones/falcon9-bottom-milestones.component';
import { Falcon9BottomUpdatesComponent } from './falcon9/falcon9-bottom-updates/falcon9-bottom-updates.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Falcon9Component,
    FalconHeavyComponent,
    DragonComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    DragonIntroComponent,
    DragonTopImgComponent,
    FhTopImgComponent,
    FhIntroComponent,
    FhMainComponent,
    FhTechboxComponent,
    FhBottomCompComponent,
    FhBottomMilestonesComponent,
    FhBottomUpdatesComponent,
    Falcon9TopImgComponent,
    Falcon9IntroComponent,
    Falcon9MainComponent,
    Falcon9TechboxComponent,
    Falcon9BottomMilestonesComponent,
    Falcon9BottomUpdatesComponent,
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
