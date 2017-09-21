import { Component } from '@angular/core';

@Component({
  selector: 'app-order-customer',
  templateUrl: './order.component.html',
  // styleUrls: ['../layout/layout.component.scss']
})
export class OrderComponent {
  services = [
  	{id: 1, name: 'Giặt ướt', price: '20000', unit: 'kg', selected: false},
  	{id: 1, name: 'Giặt khô', price: '15000', unit: 'kg', selected: false},
  	{id: 1, name: 'Là đồ', price: '30000', unit: 'kg', selected: false},
  	{id: 1, name: 'Giặt siêu tốc', price: '5000', unit: 'kg', selected: false},
  	{id: 1, name: 'Giặt vest', price: '15000', unit: 'kg', selected: false},
  ];
}
