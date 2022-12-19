import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/types/Country';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  countries: Country[] = [];
  cities: string[] = [];
  selectedCountry?: Country;
  selectedCity?: string;

  constructor(private cs: CountriesService) {}

  ngOnInit() {
    this.cs.getCountries().subscribe(cs => {
      this.countries = cs;
    });
  }

  getCities(country: Country) {
    this.cs.getCities(country).subscribe(cs => {
      this.cities = cs;
    });
  }
}
