import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardEightService {
  private url: string = 'http://localhost:5050/cardEight';
  constructor(private httpClient: HttpClient) { }
  
  get(): Observable<any> {
    const resp = this.httpClient.get<any>(this.url);
    return resp.pipe(map(result => result[0].data));
  }
}