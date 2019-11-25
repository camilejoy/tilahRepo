import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from './sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  private url:String = "https://tilah-system.herokuapp.com";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  getSales():Observable<any>{
    return this.http.get<any>(
      this.url + "/sale"
    );
  }

  getSale(id):Observable<any>{
    return this.http.get<any>(
      this.url + "/sale/" + id
    );
  }


  addSale(sale: Sale):Observable<any>{
    return this.http.post<any>(
      this.url + "/sale",
      sale,
      {headers: this.headers} 
    );
  }

  updateSale(sale: Sale, id):Observable<any>{
    return this.http.put<any>(
      this.url + "/sale/" + id,
      sale,
      {headers: this.headers}
    );
  }

  deleteSale(id):Observable<any>{
    return this.http.delete<any>(
      this.url + "/sale/" + id
    );
  }
}
