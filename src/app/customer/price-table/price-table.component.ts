import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {

  services = [
  	{id: 1, name: 'Giặt ướt', price: '20000', unit: 'kg'},
  	{id: 1, name: 'Giặt khô', price: '15000', unit: 'kg'},
  	{id: 1, name: 'Là đồ', price: '30000', unit: 'kg'},
  	{id: 1, name: 'Giặt siêu tốc', price: '5000', unit: 'kg'},
  	{id: 1, name: 'Giặt vest', price: '15000', unit: 'kg'},
  ];

  constructor() { }

  ngOnInit() {
  }



}
