import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SellerAuthComponent} from "./seller-auth/seller-auth.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'isRight'
    }
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
    data: {
      animation: 'isRight'
    }
  }
];
