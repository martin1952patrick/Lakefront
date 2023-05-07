import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <app-header [cart]="cart"></app-header>
      <router-outlet></router-outlet>
      <app-add-product></app-add-product>

      <!-- <main [@fadeAnimation]="o.isActivated ? o.activatedRoute : ''">
        <router-outlet #o="outlet"></router-outlet>
      </main> -->

      <!-- <app-footer></app-footer> -->
      <!-- <app-loader-spinner></app-loader-spinner> -->
    </div>
  `,
  styleUrls: ["./app.component.css"],
  // animations: [Animation],
})
export class AppComponent implements OnInit {
 
  title = 'frontend';
  cart:Cart = {items: []};

  constructor(private cartService:CartService){}

  ngOnInit() {
    // throw new Error('Method not implemented.');
    this.cartService.cart.subscribe((_cart) => {
    this.cart = _cart;
    })
  }
}
