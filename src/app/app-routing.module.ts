import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { MenucardComponent } from './menucard/menucard.component';
import { FrontmenuComponent } from './frontmenu/frontmenu.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminmainComponent } from './adminmain/adminmain.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  { path: 'orders', component: OrdersComponent },  
  { path: 'menu', component: MenucardComponent }, 
  { path: 'mainmenu', component: FrontmenuComponent },
  { path: 'admin78777/orders', component: AdminOrdersComponent},
  { path: 'admin78777', component: AdminmainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
