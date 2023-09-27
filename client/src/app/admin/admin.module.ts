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

@NgModule({
  declarations: [TestAComponent, TestBComponent, HeaderComponent, AdminDashboardComponent, FaqComponent, FooterComponent, HomeComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [TestAComponent, TestBComponent,HeaderComponent,AdminDashboardComponent],
})
export class AdminModule {}
