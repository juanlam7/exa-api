import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http:HttpClient) { }

  getAllVehicles(): Observable<any> {
    console.log('Get all Vehicles')
    const endpoint = `https://swapi.dev/api/vehicles`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }

  getVehiclesById(id): Observable<any> {
    console.log('Get Vehicles by id')
    const endpoint = `https://swapi.dev/api/vehicles/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.get<any>(endpoint, { headers: headers })
  }
}