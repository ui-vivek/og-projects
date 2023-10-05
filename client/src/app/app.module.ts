import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { ErrorComponent } from './error/error.component';
import { TestAddressComponent } from './test-address/test-address.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { NgToastModule } from 'ng-angular-popup';
import { TestBtnComponent } from './test-btn/test-btn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { Test2Component } from './test2/test2.component';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    TestAddressComponent,
    TestBtnComponent,
    Test2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    AdminModule,
    NgToastModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    NgIf,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
