import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TestAComponent } from './components/test-a/test-a.component';
import { TestBComponent } from './components/test-b/test-b.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './components/orders/orders.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TestAComponent,
    TestBComponent,
    HeaderComponent,
    AdminDashboardComponent,
    FaqComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ProfileComponent,
    OrdersComponent,
    FavouriteComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [
    TestAComponent,
    TestBComponent,
    HeaderComponent,
    AdminDashboardComponent,
  ],
})
export class AdminModule {}
