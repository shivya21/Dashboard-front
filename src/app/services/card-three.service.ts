import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardThreeService {
  private url: string = 'https://dashboard-backend-l1p0.onrender.com/cardThree';
  constructor(private httpClient: HttpClient) { }
  
  get(): Observable<any> {
    const resp = this.httpClient.get<any>(this.url);
    return resp.pipe(map(result => result[0].data));
  }
}