import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://5c92dbfae7b1a00014078e61.mockapi.io/owners";

  constructor(private http: HttpClient) { }

  getOwners(){
    return this.http.get(this.url);
  }

}
