import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personne} from '../personne/personne';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  // private baseUrl = "http://www.younesnaja.com/personnes";
  private baseUrl = "http://localhost:9090/personnes";

  constructor(private httpClient: HttpClient) { }

  getFirstPersonne(): Observable<Personne> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.personnes[0])
    )
  }

  getPersonnesList(): Observable<Personne[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.personnes)
    )
  }
}

interface GetResponse {
  _embedded: {
    personnes: Personne[];
  }
}
