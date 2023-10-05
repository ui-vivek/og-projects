import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAComponent } from './components/test-a/test-a.component';
import { TestBComponent } from './components/test-b/test-b.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FavouriteComponent } from './components/favourite/favourite.component';

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
        component: HomeComponent,
      },
      {
        path: 'testa',
        component: TestAComponent,
      },
      {
        path: 'testb',
        component: TestBComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path:'orders',
        component:OrdersComponent
      },{
        path:'favourite',
        component:FavouriteComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
