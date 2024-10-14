import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }
  apiURL = 'https://dummyjson.com/products';
  getProducts():Observable<any>{
    return this._http.get<any>(this.apiURL);
  }
}
