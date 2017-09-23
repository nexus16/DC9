import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent as AuthLayout} from './auth/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import { LayoutComponent as CustomerLayout}  from './customer/layout/layout.component';
import { OrderComponent }        from './customer/order/order.component';
import { PriceTableComponent } from './customer/price-table/price-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'reset-password', component: ResetPasswordComponent },
];

const childRoutes: Routes = [
  	{
	    path: '', 
	    component: AuthLayout,
	    children: [
	      	{ path: 'login',component: LoginComponent },
	      	{ path: 'reset-password', component: ResetPasswordComponent },
    	]
  	},
    {
      path: '', 
      component: CustomerLayout,
      children: [
          { path: 'order',component: OrderComponent },
          { path: 'price-table',component: PriceTableComponent },

      ]
    },
];

@NgModule({
  imports: [ 
  	RouterModule.forRoot(routes),
  	RouterModule.forChild(childRoutes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}