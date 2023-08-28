import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicessComponent } from './servicess/servicess.component';
import { HiringComponent } from './hiring/hiring.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ServicessComponent,
    HiringComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],exports:[HomeComponent,AboutComponent,ServicessComponent,HomeComponent]
})
export class PagesModule { }
