import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  serverUrl: string = environment.firebaseConfig.authDomain;
  observables: any = {};

  constructor(
    private http: HttpClient
  ) { }
  
  query(dataType: string, params: string): Promise<any> {
    let url = `${this.serverUrl}${dataType}${params}`;
    return this.http.get(url).toPromise();
  }

  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    if ( !this.observables[dataType]){
      this.observables[dataType] = new Subject();
    }
    this.http.get(url).forEach(
      data => this.observables[dataType].next(data)
      );
      
      return this.observables[dataType];
    }
  
}