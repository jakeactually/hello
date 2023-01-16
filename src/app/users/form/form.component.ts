import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/types/Country';

type Familiar = {
  fullName: FormControl<string | null>,
  relation: FormControl<string | null>,
  age: FormControl<number | null>
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  countries: Country[] = [];
  cities: string[] = [];

  registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [{ value: 35, disabled: true }],
    country: [''],
    city: [''],
    family: this.fb.array<FormGroup<Familiar>>([])
  })

  constructor(private cs: CountriesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.cs.getCountries().subscribe(cs => {
      this.countries = cs;
    });
  }

  getCities(country: string) {
    this.cs.getCities(country).subscribe(cs => {
      this.cities = cs;
    });
  }

  addFamiliar() {
    this.registerForm.controls.family.push(
      this.fb.group({
        fullName: [''],
        relation: [''],
        age: [{ value: 18, disabled: true }]
      })
    );
  }

  enviar() {
    console.log(this.registerForm.value);
  }
}
