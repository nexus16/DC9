import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  	selector: 'app-layout-auth',
  	templateUrl: './layout.component.html',
  	host: {
        '(document:click)': 'closeMenu($event)',
        '(document:touchstart)': 'getXDown($event)',
        '(document:touchmove)': 'getXUp($event)',
        '(document:touchend)': 'swipeToggleMenu()',
    },
  	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  	menuActive : boolean = false;
  	@ViewChild('menu') menu: ElementRef;
  	menuString : string;
  	xDown : number;
  	xUp : number;

    menus = [
      {id: 1, name: 'Trang chủ', iconClass: 'fa fa-home'},
      {id: 1, name: 'Đặt hàng', iconClass: 'fa fa-cart-plus'},
      {id: 1, name: 'Bảng giá và dịch vụ', iconClass: 'fa fa-file-text-o'},
      {id: 1, name: 'Cá nhân', iconClass: 'fa fa-user'},
      {id: 1, name: 'Về chúng tôi', iconClass: 'fa fa-info-circle'},
      {id: 1, name: 'Đăng xuất', iconClass: 'fa fa-sign-out'},
    ]

   	ngAfterViewInit() {
    	this.menuString = this.menu.nativeElement.innerHTML;
  	}

  	getXDown(event){
  		this.xDown = event.touches[0].clientX;
  	}
  	getXUp(event){
  		this.xUp = event.touches[0].clientX;
  	}
  	swipeToggleMenu(){
  		if (this.xUp > this.xDown && (this.xUp - this.xDown > 50)) {
  			this.activeMenu();
  		}
  		if (this.xUp < this.xDown && (this.xDown - this.xUp > 50)) {
  			this.deactiveMenu();
  		}
  	}

   	closeMenu(event){
   		if (this.menuActive) {
	   		let clickElement = event.target.innerHTML;
	   		let check = this.menuString.indexOf(clickElement);
	   		if (check == -1) {
	   			this.deactiveMenu();
	   		}
   		}
   }

  	activeMenu() : void {
  		this.menuActive = true;
  	}
  	deactiveMenu() : void {
  		this.menuActive = false;
  	}
}
