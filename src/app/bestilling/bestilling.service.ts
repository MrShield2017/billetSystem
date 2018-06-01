import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs';
import forstilling from '../forestillinger/Forestilling'

@Injectable()
export class BestillingService {

  private url = 'https://notifikationapi.herokuapp.com';
  public forstillingen: forstilling;
  constructor(private http: HttpClient) { }

  postTest(json) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.url + '/api/mail', json, {headers: headers});
  }
  valgtForstilling(f){
    this.forstillingen = f;
  }
}
