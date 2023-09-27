import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAComponent } from './components/test-a/test-a.component';
import { TestBComponent } from './components/test-b/test-b.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { VhomeComponent } from './components/vhome/vhome.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: VhomeComponent,
      },
      {
        path: 'testa',
        component: TestAComponent,
      },
      {
        path: 'testb',
        component: TestBComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
