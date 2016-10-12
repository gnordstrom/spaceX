import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Falcon9Component } from './falcon9/falcon9.component';
import { FalconHeavyComponent } from './falcon-heavy/falcon-heavy.component';
import { DragonComponent } from './dragon/dragon.component';
import { ShopComponent } from './shop/shop.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'falcon9', component: Falcon9Component},
    { path: 'falcon-heavy', component: FalconHeavyComponent},
    { path: 'dragon', component: DragonComponent},
    { path: 'shop', component: ShopComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
