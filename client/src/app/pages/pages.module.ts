import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicessComponent } from './servicess/servicess.component';
import { HiringComponent } from './hiring/hiring.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    ServicessComponent,
    HiringComponent,
    AboutComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],exports:[HomeComponent,AboutComponent,ServicessComponent,HomeComponent,ErrorPageComponent]
})
export class PagesModule { }
