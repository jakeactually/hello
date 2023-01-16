import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiList, Country } from '../types/Country';

const api = 'https://countriesnow.space/api/v0.1';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { 

  }

  getCountries() {
    return this.http
      .get<ApiList<Country>>(`${api}/countries/states`)
      .pipe(map(res => res.data));
  }

  getCities(country: string) {
    return this.http
      .post<ApiList<string>>(`${api}/countries/cities`, { country })
      .pipe(map(res => res.data));
  }
}
