import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  getAllPeople(): Observable<any> {
    console.log('Get all people')
    const endpoint = `https://swapi.dev/api/people`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }

  getPeopleById(id): Observable<any> {
    console.log('Get people by id')
    const endpoint = `https://swapi.dev/api/people/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }
}