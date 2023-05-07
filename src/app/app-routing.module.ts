import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { AddProductComponent } from './pages/home/components/add-product/add-product.component';

const routes: Routes = [{
  path: 'home',
  component:HomeComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
},

{
  path: 'cart',
  component:CartComponent
},

{
  path: 'add-product',
  component:AddProductComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
