import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http:HttpClient) { }

  getAllStarships(): Observable<any> {
    console.log('Get all Starships')
    const endpoint = `https://swapi.dev/api/starships`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }

  getStarshipsById(id): Observable<any> {
    console.log('Get Starships by id')
    const endpoint = `https://swapi.dev/api/starships/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }
}