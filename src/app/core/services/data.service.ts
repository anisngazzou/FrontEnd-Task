// src/app/core/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPrograms(): Observable<any> {
    return this.http.get<any[]>('assets/program.json'); // This should return an object with a programs array
  }

  getMaterials(): Observable<any[]> {
    return this.http.get<any[]>('assets/materials.json'); // This should return an array of materials
  }
}
