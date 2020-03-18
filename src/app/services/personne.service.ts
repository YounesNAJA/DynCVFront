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
  private baseUrl = "http://ec2-3-16-1-158.us-east-2.compute.amazonaws.com:8080/personnes";

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
