import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from '../login/login.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    ResetPasswordComponent,
  ],
  imports: [
    RouterModule
  ],
  providers: [],
  exports: [
  	LoginComponent,
    LayoutComponent,
    ResetPasswordComponent
  ]
})
export class LayoutModule { }
