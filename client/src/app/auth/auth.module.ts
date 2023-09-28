import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule,NgToastModule],
  exports: [SignInComponent, SignUpComponent],
})
export class AuthModule {}
