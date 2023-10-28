import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient ) { }

  public getHeroList(): Observable<Hero[]>{ 
    return this.http.get<Hero[]>("https://api.opendota.com/api/heroes"); 
    } 
}
