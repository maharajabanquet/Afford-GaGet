import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public router:Router) { this.router.events.subscribe((val) => this.changeActiveIcon()) }

  //default icons
  home = "home-outline";
  wishlist = "heart-outline";
  cart = "bag-handle-outline";
  account = "person-outline";

  ngOnInit() {
    this.changeActiveIcon();
  }

  changeActiveIcon(){
    if(this.router.url == "/home/tabs/tab1"){
      this.home = "home";
    }else { this.home = "home-outline"; }

    if(this.router.url == "/home/tabs/tab2"){
      this.wishlist = "heart";
    }else { this.wishlist = "heart-outline"; }

    if(this.router.url == "/home/tabs/tab3"){
      this.cart = "bag-handle";
    }else { this.cart = "bag-handle-outline"; }

    if(this.router.url == "/home/tabs/tab4"){
      this.account = "person";
    }else { this.account = "person-outline"; }
  }

}
