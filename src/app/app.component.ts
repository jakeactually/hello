import { Component } from '@angular/core';
import { Loader, loading } from './helpers/loader.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  loading = false;

  constructor() {
    loading.subscribe(val => {
      this.loading = val;
    });
  }
}
