import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http:HttpClient) { }

  getAllPlanets(): Observable<any> {
    console.log('Get all planets')
    const endpoint = `https://swapi.dev/api/planets`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }

  getPlanetsById(id): Observable<any> {
    console.log('Get planets by id')
    const endpoint = `https://swapi.dev/api/planets/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }
}