import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, pipe, tap } from 'rxjs';
import { ApiList, Country } from '../types/Country';

const api = 'https://countriesnow.space/api/v0.1';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  loading = true;

  constructor(private http: HttpClient) { 

  }

  getCountries() {
    this.loading = true;

    return this.http
      .get<ApiList<Country>>(`${api}/countries/states`)
      .pipe(map(res => res.data))
      .pipe(tap(() => this.loading = false))
      .pipe(catchError(async () => { this.loading = false; return []; }));
  }

  getCities(country: Country) {
    this.loading = true;
    
    return this.http
      .post<ApiList<string>>(`${api}/countries/cities`, { country: country.name })
      .pipe(map(res => res.data))
      .pipe(tap(() => this.loading = false))
      .pipe(catchError(async () => { this.loading = false; return []; }));
  }
}
