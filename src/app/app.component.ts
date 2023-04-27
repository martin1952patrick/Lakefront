import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <app-header></app-header>
      <router-outlet></router-outlet>

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
export class AppComponent {
  title = 'frontend';
}
