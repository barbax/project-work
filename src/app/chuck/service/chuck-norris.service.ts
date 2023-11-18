import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  BASE_URL : string = 'https://api.chucknorris.io/jokes/'

  constructor(
    private http : HttpClient
  ) { }

  getRandom():Observable<any>{
   return this.http.get(`${this.BASE_URL}random`);
  }

  getElenco():Observable<any>{
    return this.http.get(`${this.BASE_URL}categories`);
   }

   getRandomCategories(categoria : string):Observable<any>{
    return this.http.get(`${this.BASE_URL}random?category=${categoria}`);
   }


}
