import { Component } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';

  constructor(private cs: CountriesService) {

  }

  get loading() {
    return this.cs.loading;
  }
}
