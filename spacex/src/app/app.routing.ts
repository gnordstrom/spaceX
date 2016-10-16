import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Falcon9Component } from './falcon9/falcon9.component';
import { FalconHeavyComponent } from './falcon-heavy/falcon-heavy.component';
import { DragonComponent } from './dragon/dragon.component';
import { ShopComponent } from './shop/shop.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { ShopMensComponent } from './shop/shop-mens/shop-mens.component';
import { ShopWomensComponent } from './shop/shop-womens/shop-womens.component';
import { ShopKidsComponent } from './shop/shop-kids/shop-kids.component';
import { ShopAccessoriesComponent } from './shop/shop-accessories/shop-accessories.component';
import { ShopPremiumComponent } from './shop/shop-premium/shop-premium.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { InsideCargoComponent } from './dragon/dragon-inside-spacecraft/inside-cargo/inside-cargo.component';
import { InsideCrewComponent } from './dragon/dragon-inside-spacecraft/inside-crew/inside-crew.component';
import { InsideDragonlabComponent } from './dragon/dragon-inside-spacecraft/inside-dragonlab/inside-dragonlab.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'falcon9', component: Falcon9Component},
    { path: 'falcon-heavy', component: FalconHeavyComponent},
    { path: 'dragon', component: DragonComponent},
    { path: 'dragon/cargo', component: InsideCargoComponent},
    { path: 'dragon/crew', component: InsideCrewComponent},
    { path: 'dragon/dragonlab', component: InsideDragonlabComponent},
    { path: 'shop', component: ShopComponent},
    { path: 'careers', component: CareersComponent},
    { path: 'about', component: AboutComponent},
    { path: 'shop/mens', component: ShopMensComponent},
    { path: 'shop/womens', component: ShopWomensComponent},
    { path: 'shop/kids', component: ShopKidsComponent},
    { path: 'shop/accessories', component: ShopAccessoriesComponent},
    { path: 'shop/premium', component: ShopPremiumComponent},
    { path: 'shop/cart', component: ShoppingCartComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
