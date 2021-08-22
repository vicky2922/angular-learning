import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path:'products', component: ProductDetailComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'data/:id', component:ProductDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
