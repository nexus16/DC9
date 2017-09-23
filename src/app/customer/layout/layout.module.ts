import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { OrderComponent } from '../order/order.component';
import { LayoutComponent } from './layout.component';
import { PriceTableComponent } from '../price-table/price-table.component';

@NgModule({
  declarations: [
    OrderComponent,
    LayoutComponent,
    PriceTableComponent,

  ],
  imports: [ RouterModule,CommonModule ],
  providers: [],
})

export class LayoutModule { }
