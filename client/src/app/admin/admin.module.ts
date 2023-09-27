import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TestAComponent } from './components/test-a/test-a.component';
import { TestBComponent } from './components/test-b/test-b.component';
import { VhomeComponent } from './components/vhome/vhome.component';
import { VfooterComponent } from './components/vfooter/vfooter.component';
import { HeaderComponent } from './components/header/header.component';
import { VfaqComponent } from './components/vfaq/vfaq.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [TestAComponent, TestBComponent, VhomeComponent, VfooterComponent, HeaderComponent, VfaqComponent, AdminDashboardComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [TestAComponent, TestBComponent,VhomeComponent,VfooterComponent,HeaderComponent,VfaqComponent,AdminDashboardComponent],
})
export class AdminModule {}