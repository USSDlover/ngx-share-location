import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .content {
      width: 100%;
      max-width: 45rem;
      padding: 1.25rem 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class AppComponent {
  title = 'ngx-share-location';
}
