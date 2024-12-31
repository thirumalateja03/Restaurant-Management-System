import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { MenucardComponent } from './menucard/menucard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ItemPopupComponent } from './item-popup/item-popup.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroComponent } from './hero/hero.component';
import { FrontmenuComponent } from './frontmenu/frontmenu.component';
import { MenuheroComponent } from './menuhero/menuhero.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { NgChartsModule } from 'ng2-charts';
import { PieCharComponent } from './pie-char/pie-char.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    MenucardComponent,
    SlideshowComponent,
    ItemPopupComponent,
    HeroComponent,
    FrontmenuComponent,
    MenuheroComponent,
    AdminOrdersComponent,
    AdminmainComponent,
    PieCharComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
