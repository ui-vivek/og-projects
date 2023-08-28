import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HiringComponent } from './pages/hiring/hiring.component';
import { ServicessComponent } from './pages/servicess/servicess.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: HiringComponent,
    path: 'hiring',
  },
  {
    component: ServicessComponent,
    path: 'servicess',
  },{
    component:ErrorPageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
