import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule as AuthLayoutModule }  from './auth/layout/layout.module';
import { LayoutModule as CustomerLayoutModule }  from './customer/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    AppRoutingModule,

    AuthLayoutModule,
    CustomerLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
