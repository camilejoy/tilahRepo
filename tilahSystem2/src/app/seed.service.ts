import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seed } from './seed';

@Injectable({
  providedIn: 'root'
})
export class SeedService {

  constructor(private http: HttpClient) { }

  private url:String = "https://tilah-system.herokuapp.com";
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  getSeeds():Observable<any>{
    return this.http.get<any>(
      this.url + "/seed"
    );
  }

  getSeed(id):Observable<any>{
    return this.http.get<any>(
      this.url + "/seed/" + id
    );
  }

  addSeed(seed: Seed):Observable<any>{
    return this.http.post<any>(
      this.url + "/seed",
      seed,
      {headers: this.headers} 
    );
  }

  updateSeed(seed: Seed, id):Observable<any>{
    return this.http.put<any>(
      this.url + "/seed/" + id,
      seed,
      {headers: this.headers}
    );
  }

  deleteSeed(id):Observable<any>{
    return this.http.delete<any>(
      this.url + "/seed/" + id
    );
  }
}
