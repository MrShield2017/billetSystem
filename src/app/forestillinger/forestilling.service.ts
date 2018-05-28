import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import forestilling from './Forestilling';
import { Observable } from 'rxjs';

@Injectable()
export class ForestillingService {
  private url = "https://floating-island-49352.herokuapp.com/";
  constructor(private http: HttpClient) { }

  getForestillinger(): Observable<forestilling[]>{
    return this.http.get<forestilling[]>(this.url);
  }

}
