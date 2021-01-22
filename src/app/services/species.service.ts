import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http:HttpClient) { }

  getAllSpecies(): Observable<any> {
    console.log('Get all Species')
    const endpoint = `https://swapi.dev/api/species`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }

  getSpeciesById(id): Observable<any> {
    console.log('Get Species by id')
    const endpoint = `https://swapi.dev/api/species/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }
}