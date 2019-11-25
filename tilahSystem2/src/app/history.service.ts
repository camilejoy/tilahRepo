import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public userId = "";

  constructor(private http: HttpClient) { }

  private url:String = "https://tilah-system.herokuapp.com";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  addHistory(histo: History):Observable<any>{
    return this.http.post<any>(
      this.url + "/log",
      histo,
      {headers: this.headers} 
    );
  }

  getHistory():Observable<any>{
    return this.http.get<any>(
      this.url + "/log"
    );
  }

  getUserHistory(id):Observable<any>{
    return this.http.get<any>(
      this.url + "/log/" + id,
    );
  }
}
 