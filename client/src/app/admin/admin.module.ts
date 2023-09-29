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

@NgModule({
  declarations: [TestAComponent, TestBComponent, HeaderComponent, AdminDashboardComponent, FaqComponent, FooterComponent, HomeComponent, MenuComponent, ProfileComponent],
  imports: [CommonModule, AdminRoutingModule,ReactiveFormsModule],
  exports: [TestAComponent, TestBComponent,HeaderComponent,AdminDashboardComponent],
})
export class AdminModule {}
