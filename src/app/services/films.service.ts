import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http:HttpClient) { }

  getAllFilms(): Observable<any> {
    console.log('Get all films')
    const endpoint = `https://cors-anywhere.herokuapp.com/http://swapi.dev/api/films`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }

  getFilmsById(id): Observable<any> {
    console.log('Get films by id')
    const endpoint = `https://cors-anywhere.herokuapp.com/http://swapi.dev/api/films/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }
}