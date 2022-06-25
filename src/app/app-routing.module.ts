import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailsComponent } from './pages/products-page/product-details/product-details.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';



const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
 {path:'home',component:HomePageComponent},
 {path:'products',component:ProductsPageComponent},
 {path:'products/:id',component:ProductDetailsComponent},
 {path:'**',component:NotFoundComponent},
//  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
